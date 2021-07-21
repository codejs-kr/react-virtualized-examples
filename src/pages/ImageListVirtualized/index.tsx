import { useEffect, useState, useCallback, useRef } from 'react';
import { WindowScroller, CellMeasurer, CellMeasurerCache, AutoSizer, List, ListRowProps } from 'react-virtualized';
import { checkInfiniteScrollPosition } from '../../helpers/scroll';
import { throttle } from 'lodash-es';

import { ImageListItem } from '../ImageList';
import { Container, Heading, Button, Text } from '@chakra-ui/react';
import StackSkleton from '../../components/StackSkeleton';

import './index.scss';

const cellCache = new CellMeasurerCache({
  defaultWidth: 100,
  fixedWidth: true,
});

let totalList: ImageListItem[] = [];

const ImageListVirtualized = () => {
  const [list, setList] = useState<ImageListItem[]>([]);
  const listRef = useRef<List>(null);

  const rowRenderer = ({ index, key, parent, style }: ListRowProps) => {
    return (
      <CellMeasurer cache={cellCache} parent={parent} key={key} columnIndex={0} rowIndex={index}>
        {({ measure }) => (
          <div style={style} key={index}>
            <div className="image-list-item">
              <section className="thumb-wrap">
                <img src={list[index].thumbnailUrl} alt="" onLoad={measure} />
              </section>
              <section>
                <p>index: {index}</p>
                <p>title: {list[index].title}</p>
              </section>
            </div>
          </div>
        )}
      </CellMeasurer>
    );
  };

  const fetchData = useCallback(async () => {
    // const res = await fetch('https://jsonplaceholder.typicode.com/photos');
    // console.log('res :>> ', res);
    fetch('https://jsonplaceholder.typicode.com/photos').then((res) => {
      const data = res.json();

      data.then((newList) => {
        totalList = newList;
        addList();
      });
    });
  }, []);

  const addList = useCallback(() => {
    if (!totalList.length) {
      return;
    }

    const data = totalList.splice(0, 100);
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
          react-virtualized (O)
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
                    isScrolling={isScrolling}
                    overscanRowCount={0}
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
          <StackSkleton count={5} />
        )}
      </section>
    </>
  );
};

export default ImageListVirtualized;
