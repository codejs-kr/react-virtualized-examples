import { useEffect, useState, useCallback } from 'react';
import { Container, Heading, Button, Text } from '@chakra-ui/react';
import StackSkleton from '../../components/StackSkeleton';
import './index.scss';

export interface ImageListItem {
  id: number;
  title: string;
  thumbnailUrl: string;
}

const ImageList = () => {
  const [list, setList] = useState<ImageListItem[]>([]);

  const addList = useCallback(() => {
    fetch('https://jsonplaceholder.typicode.com/photos').then((res) => {
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
          list.map(({ title, thumbnailUrl }, index) => (
            <div className="text-list-item">
              <div>index: {index}</div>
              <div>title: {title}</div>
              <div>body: {thumbnailUrl}</div>
            </div>
          ))
        ) : (
          <StackSkleton count={5} />
        )}
      </section>
    </>
  );
};

export default ImageList;
