import { useEffect, useState, useCallback } from 'react';
import { Container, Heading, Button, Text } from '@chakra-ui/react';
import StackSkleton from '../../components/StackSkeleton';
import './index.scss';

export interface TextListItem {
  id: number;
  name: string;
  email: string;
  body: string;
}

const TextList = () => {
  const [list, setList] = useState<TextListItem[]>([]);

  const addList = useCallback(() => {
    fetch('https://jsonplaceholder.typicode.com/comments').then((res) => {
      const data = res.json();

      data.then((newList) => {
        setList([...list, ...newList]);
      });
    });
  }, [list, setList]);

  useEffect(() => {
    addList();
  }, []);

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
            <div className="text-list-item" key={index}>
              <p>index: {index}</p>
              <p>email: {email}</p>
              <p>name: {name}</p>
              <p>body: {body}</p>
            </div>
          ))
        ) : (
          <StackSkleton count={5} />
        )}
      </section>
    </>
  );
};

export default TextList;
