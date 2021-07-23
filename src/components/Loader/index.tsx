import { Spinner, Box } from '@chakra-ui/react';

const Loader = () => {
  return (
    <Box textAlign="center" margin={6}>
      <Spinner speed="0.65s" emptyColor="gray.200" color="blue.500" size="lg" />
    </Box>
  );
};

export default Loader;
