import { useEffect, useState, useCallback, useRef } from 'react';
import { WindowScroller, CellMeasurer, CellMeasurerCache, AutoSizer, List, ListRowProps } from 'react-virtualized';
import { checkInfiniteScrollPosition } from '../../helpers/scroll';
import { throttle } from 'lodash-es';
import { fetchComments } from '../../apis';

import { Container, Heading, Button, Text } from '@chakra-ui/react';
import { CheckCircleIcon } from '@chakra-ui/icons';
import { TextListItemState } from '../TextList';
import StackSkeleton from '../../components/StackSkeleton';
import TextListItem from '../../components/TextListItem';
import Loader from '../../components/Loader';

const cellCache = new CellMeasurerCache({
  fixedWidth: true,
});

const TextListVirtualized = () => {
  const [list, setList] = useState<TextListItemState[]>([]);
  const [isFetching, setFetching] = useState<boolean>(false);
  const listRef = useRef<List>(null);

  const rowRenderer = ({ index, key, parent, style }: ListRowProps) => {
    const { email, name, body } = list[index];
    return (
      <CellMeasurer cache={cellCache} parent={parent} key={key} columnIndex={0} rowIndex={index}>
        <div style={style} key={index}>
          <TextListItem index={index} email={email} name={name} body={body} />
        </div>
      </CellMeasurer>
    );
  };

  const addList = useCallback(async () => {
    setFetching(true);
    const response = await fetchComments();
    setList([...list, ...response]);
    setFetching(false);
  }, [list, setList]);

  const onScroll = useCallback(() => {
    if (isFetching) {
      return false;
    }

    const isNeedFetching = checkInfiniteScrollPosition({ bottom: 600 });
    if (isNeedFetching) {
      addList();
    }
  }, [isFetching, addList]);

  useEffect(() => {
    addList();
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    const onScrollTrottle = throttle(onScroll, 100);
    window.addEventListener('scroll', onScrollTrottle, { passive: true });
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
          <>
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
                      overscanRowCount={5} // overscanRowCount 속성은 사용자가 스크롤하는 방향으로 추가 행을 렌더링하여 사용자가 가상화된 콘텐츠를 렌더링할 수 있는 것보다 빠르게 스크롤시 깜빡임을 최소화합니다.
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
            {isFetching && <Loader />}
          </>
        ) : (
          <StackSkeleton count={5} />
        )}
      </section>
    </>
  );
};

export default TextListVirtualized;
