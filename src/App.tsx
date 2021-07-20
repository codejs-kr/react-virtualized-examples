import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { ChakraProvider, Flex, Container, Menu, MenuButton, MenuList, MenuItem, IconButton } from '@chakra-ui/react';

import { HamburgerIcon } from '@chakra-ui/icons';
import TextList from './pages/TextList';
import ImageList from './pages/ImageList';

const App = () => {
  return (
    <ChakraProvider>
      <Flex>
        <Container width="700px">
          <Router>
            <Container>
              <Menu>
                <MenuButton as={IconButton} aria-label="Options" icon={<HamburgerIcon />} variant="outline" />
                <MenuList>
                  <MenuItem>기본 리스트</MenuItem>
                  <MenuItem>적용된 리스트</MenuItem>
                </MenuList>
              </Menu>
            </Container>
            <Switch>
              <Route exact path="/" component={TextList} />
              <Route path="/text-list" component={TextList} />
              <Route path="/image-list" component={ImageList} />
              <Redirect to="/" />
            </Switch>
          </Router>
        </Container>
      </Flex>
    </ChakraProvider>
  );
};

export default App;
