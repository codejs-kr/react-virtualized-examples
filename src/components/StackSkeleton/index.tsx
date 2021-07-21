import { Stack, Skeleton } from '@chakra-ui/react';

interface Props {
  count?: number;
  height?: number;
}

const StackSkeleton = ({ count = 5, height = 150 }: Props) => {
  return (
    <Stack>
      {Array.from({ length: count }).map((_, index) => (
        <Skeleton height={height} key={index} />
      ))}
    </Stack>
  );
};

export default StackSkeleton;
