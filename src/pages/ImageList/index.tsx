import { useEffect, useState, useCallback } from 'react';
import { checkInfiniteScrollPosition } from '../../helpers/scroll';
import { throttle } from 'lodash-es';
import { fetchPhotos } from '../../apis';

import { Container, Heading, Button, Text } from '@chakra-ui/react';
import StackSkeleton from '../../components/StackSkeleton';
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
          <>
            {list.map(({ title, url }, index) => (
              <ImageListItem key={index} index={index} imageUrl={url} title={title} />
            ))}
          </>
        ) : (
          <StackSkeleton count={5} />
        )}
      </section>
    </>
  );
};

export default ImageList;
