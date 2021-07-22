import { useEffect, useState, useCallback } from 'react';
import { checkInfiniteScrollPosition } from '../../helpers/scroll';
import { throttle } from 'lodash-es';

import { Container, Heading, Button, Text } from '@chakra-ui/react';
import StackSkleton from '../../components/StackSkeleton';
import ImageListItem from '../../components/ImageListItem';

export interface ImageListItemState {
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

export const SPLICE_SIZE = 500;

let totalList: ImageListItemState[] = [];

const ImageList = () => {
  const [list, setList] = useState<ImageListItemState[]>([]);

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
          react-virtualized (X)
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
          list.map(({ title, thumbnailUrl }, index) => (
            <ImageListItem index={index} imageUrl={thumbnailUrl} title={title} />
          ))
        ) : (
          <StackSkleton count={5} />
        )}
      </section>
    </>
  );
};

export default ImageList;
