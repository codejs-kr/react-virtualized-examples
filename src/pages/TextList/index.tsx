import { useEffect, useState, useCallback, Fragment } from 'react';
import { checkInfiniteScrollPosition } from '../../helpers/scroll';
import { throttle } from 'lodash-es';

import { Container, Heading, Button, Text } from '@chakra-ui/react';
import StackSkleton from '../../components/StackSkeleton';
import TextListItem from '../../components/TextListItem';

export interface TextListItemState {
  id: number;
  name: string;
  email: string;
  body: string;
}

let isFetching: boolean = false;

const TextList = () => {
  const [list, setList] = useState<TextListItemState[]>([]);

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
          list.map(({ name, email, body }, index) => (
            <Fragment key={index}>
              <TextListItem index={index} email={email} name={name} body={body} />
            </Fragment>
          ))
        ) : (
          <StackSkleton count={5} />
        )}
      </section>
    </>
  );
};

export default TextList;
