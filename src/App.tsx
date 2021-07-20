import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { ChakraProvider, Flex, Container } from '@chakra-ui/react';

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
            <Navigation />
            <Switch>
              <Route exact path="/" component={TextList} />
              <Route path="/text-list" component={TextList} />
              <Route path="/image-list" component={ImageList} />
              <Route path="/text-list-virtualized" component={TextListVirtualized} />
              <Route path="/image-list-virtualized" component={ImageListVirtualized} />
              <Redirect to="/" />
            </Switch>
          </Router>
        </Container>
      </Flex>
    </ChakraProvider>
  );
};

export default App;
