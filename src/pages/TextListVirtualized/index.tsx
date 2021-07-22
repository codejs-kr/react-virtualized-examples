import { useEffect, useState, useCallback, useRef } from 'react';
import { WindowScroller, CellMeasurer, CellMeasurerCache, AutoSizer, List, ListRowProps } from 'react-virtualized';
import { checkInfiniteScrollPosition } from '../../helpers/scroll';
import { throttle } from 'lodash-es';

import { TextListItemState } from '../TextList';
import { Container, Heading, Button, Text } from '@chakra-ui/react';
import StackSkleton from '../../components/StackSkeleton';
import TextListItem from '../../components/TextListItem';

const cellCache = new CellMeasurerCache({
  defaultWidth: 100,
  fixedWidth: true,
});

let isFetching: boolean = false;

const TextListVirtualized = () => {
  const [list, setList] = useState<TextListItemState[]>([]);
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

  const addList = useCallback(() => {
    isFetching = true;
    fetch('https://jsonplaceholder.typicode.com/comments').then((res) => {
      const data = res.json();

      data.then((newList) => {
        setList([...list, ...newList]);
        isFetching = false;
      });
    });
  }, [list, setList]);

  useEffect(() => {
    addList();
  }, []);

  const onScroll = useCallback(() => {
    if (isFetching) {
      return false;
    }

    const isNeedFetching = checkInfiniteScrollPosition({ bottom: 600 });
    if (isNeedFetching) {
      addList();
    }
  }, [addList]);

  useEffect(() => {
    const onScrollTrottle = throttle(onScroll, 100);
    window.addEventListener('scroll', onScrollTrottle, { passive: true });
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

export default TextListVirtualized;
