import { NavLink } from 'react-router-dom';
import { Container, Heading, SimpleGrid } from '@chakra-ui/react';

const Naviagation = () => {
  return (
    <Container padding={`0 0 20px 0`} marginBottom={5} borderBottom={'solid 1px #bbb'}>
      <Heading mb={5} textAlign="center">
        React virtualized examples
      </Heading>
      <SimpleGrid className="navigation" columns={2} spacingX="5px" spacingY="20px">
        <NavLink to="/text-list" activeClassName="selected">
          텍스트 목록
        </NavLink>
        <NavLink to="/text-list-virtualized" activeClassName="selected">
          텍스트 목록 (with virtualized)
        </NavLink>
        <NavLink to="/image-list" activeClassName="selected">
          이미지 목록
        </NavLink>
        <NavLink to="/image-list-virtualized" activeClassName="selected">
          이미지 목록 (with virtualized)
        </NavLink>
      </SimpleGrid>
    </Container>
  );
};

export default Naviagation;
