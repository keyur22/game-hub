import { Card, Skeleton, CardBody, SkeletonText } from '@chakra-ui/react';

const GameCardSkeleton = () => {
  return (
    <Card.Root borderRadius={10}>
      <Skeleton height={{ base: '250px', lg: '150px' }} />
      <CardBody>
        <SkeletonText />
      </CardBody>
    </Card.Root>
  );
};

export default GameCardSkeleton;
