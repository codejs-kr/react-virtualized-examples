import { useEffect, useState, useRef, useCallback } from 'react';
import { WindowScroller, CellMeasurer, CellMeasurerCache, AutoSizer, List, ListRowProps } from 'react-virtualized';
import { Container, Heading, Button, Text, Stack, Skeleton } from '@chakra-ui/react';

interface Post {
  id: number;
  userId: number;
  title: string;
  body: string;
}

const cache = new CellMeasurerCache({
  defaultWidth: 100,
  fixedWidth: true,
});

const TextListVirtualized = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const listRef = useRef<List>(null);

  const rowRenderer = ({ index, key, parent, style }: ListRowProps) => {
    return (
      <CellMeasurer cache={cache} parent={parent} key={key} columnIndex={0} rowIndex={index}>
        <div style={style}>
          <div
            style={{
              padding: 10,
              marginBottom: 10,
              color: 'white',
              backgroundColor: '#282c34',
            }}
          >
            <div>index: {index}</div>
            <div>title: {posts[index].title}</div>
            <div>body: {posts[index].body}</div>
          </div>
        </div>
      </CellMeasurer>
    );
  };

  const addPosts = useCallback(() => {
    fetch('https://jsonplaceholder.typicode.com/posts').then((response) => {
      const data = response.json();

      data.then((newPosts) => {
        setPosts([...posts, ...newPosts]);
      });
    });
  }, [posts, setPosts]);

  useEffect(() => {
    addPosts();
  }, []);

  return (
    <>
      <Container padding={0} marginBottom={5} textAlign="center">
        <Heading size="md" mb={5} textAlign="center">
          react-virtualized (O)
        </Heading>
        <Button mb={5} colorScheme="blue" onClick={addPosts}>
          목록 추가하기
        </Button>
        <Text fontSize="20px" color="tomato">
          현재목록: {posts.length} 개
        </Text>
      </Container>
      {posts.length ? (
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
                  rowCount={posts.length}
                  rowHeight={cache.rowHeight}
                  rowRenderer={rowRenderer}
                  deferredMeasurementCache={cache}
                />
              )}
            </AutoSizer>
          )}
        </WindowScroller>
      ) : (
        <Stack>
          <Skeleton height="150px" />
          <Skeleton height="150px" />
          <Skeleton height="150px" />
          <Skeleton height="150px" />
          <Skeleton height="150px" />
        </Stack>
      )}
    </>
  );
};

export default TextListVirtualized;
