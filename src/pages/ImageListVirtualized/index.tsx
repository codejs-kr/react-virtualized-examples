import { useEffect, useState, useCallback, useRef } from 'react';
import { WindowScroller, CellMeasurer, CellMeasurerCache, AutoSizer, List, ListRowProps } from 'react-virtualized';
import { checkInfiniteScrollPosition } from '../../helpers/scroll';
import { throttle } from 'lodash-es';
import { fetchPhotos } from '../../apis';

import { Container, Heading, Button, Text } from '@chakra-ui/react';
import { CheckCircleIcon } from '@chakra-ui/icons';
import { ImageListItemState, SPLICE_SIZE } from '../ImageList';
import ImageListItem from '../../components/ImageListItem';
import StackSkeleton from '../../components/StackSkeleton';

const cellCache = new CellMeasurerCache({
  fixedWidth: true,
});

let totalList: ImageListItemState[] = [];

const ImageListVirtualized = () => {
  const [list, setList] = useState<ImageListItemState[]>([]);
  const listRef = useRef<List>(null);

  const rowRenderer = ({ index, key, parent, style }: ListRowProps) => {
    const { title, url } = list[index];
    return (
      <CellMeasurer cache={cellCache} parent={parent} key={key} columnIndex={0} rowIndex={index}>
        {({ measure }) => (
          <div style={style} key={index}>
            <ImageListItem
              index={index}
              title={title}
              imageUrl={url}
              onLoad={measure} // 중요: measure 함수로 이미지가 로드된 이후 재 측정을 해주어야 정확한 사이즈로 랜더링됩니다.
            />
          </div>
        )}
      </CellMeasurer>
    );
  };

  const fetchData = useCallback(async () => {
    const response = await fetchPhotos();
    totalList = response;
    addList();
    // eslint-disable-next-line
  }, []);

  const addList = useCallback(() => {
    if (!totalList.length) {
      return;
    }

    const data = totalList.splice(0, SPLICE_SIZE);
    setList([...list, ...data]);
  }, [list]);

  const onScroll = useCallback(() => {
    const isNeedFetching = checkInfiniteScrollPosition({ bottom: 600 });
    if (isNeedFetching) {
      addList();
    }
  }, [addList]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  useEffect(() => {
    const onScrollTrottle = throttle(onScroll, 100);
    window.addEventListener('scroll', onScrollTrottle);
    return () => window.removeEventListener('scroll', onScrollTrottle);
  }, [onScroll]);

  return (
    <>
      <Container padding={0} marginBottom={5} textAlign="center">
        <Heading size="md" mb={5} textAlign="center">
          react-virtualized (<CheckCircleIcon color="green.500" />)
        </Heading>
        <Button mb={5} colorScheme="blue" onClick={addList}>
          목록 추가하기
        </Button>
        <Text fontSize="20px" color="tomato">
          현재목록: {list.length} 개
        </Text>
      </Container>

      <section>
        {list.length ? (
          <WindowScroller>
            {({ height, scrollTop, isScrolling, onChildScroll }) => (
              <AutoSizer disableHeight>
                {({ width }) => (
                  <List
                    ref={listRef}
                    autoHeight
                    height={height}
                    width={width}
                    overscanRowCount={0}
                    isScrolling={isScrolling}
                    onScroll={onChildScroll}
                    scrollTop={scrollTop}
                    rowCount={list.length}
                    rowHeight={cellCache.rowHeight}
                    rowRenderer={rowRenderer}
                    deferredMeasurementCache={cellCache}
                  />
                )}
              </AutoSizer>
            )}
          </WindowScroller>
        ) : (
          <StackSkeleton count={5} />
        )}
      </section>
    </>
  );
};

export default ImageListVirtualized;
