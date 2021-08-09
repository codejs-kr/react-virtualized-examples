import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { ChakraProvider, Flex, Container, Heading } from '@chakra-ui/react';

import Navigation from './components/Navigation';
import TextList from './pages/TextList';
import ImageList from './pages/ImageList';
import TextListVirtualized from './pages/TextListVirtualized';
import ImageListVirtualized from './pages/ImageListVirtualized';

const App = () => {
  return (
    <ChakraProvider>
      <Flex>
        <Container width="700px" padding={`20px 15px`}>
          <Router>
            <Container padding={`0 0 20px 0`} marginBottom={5} borderBottom={'solid 1px #bbb'}>
              <Heading mb={5} textAlign="center">
                React virtualized examples
              </Heading>
              <Navigation />
            </Container>
            <Switch>
              <Route path="/text-list" component={TextList} />
              <Route path="/image-list" component={ImageList} />
              <Route path="/text-list-virtualized" component={TextListVirtualized} />
              <Route path="/image-list-virtualized" component={ImageListVirtualized} />
              <Redirect to="/text-list-virtualized" />
            </Switch>
          </Router>
        </Container>
      </Flex>
    </ChakraProvider>
  );
};

export default App;
