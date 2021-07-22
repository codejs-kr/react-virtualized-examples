import { NavLink } from 'react-router-dom';
import { SimpleGrid } from '@chakra-ui/react';
import './index.scss';

const Naviagation = () => {
  return (
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
  );
};

export default Naviagation;
