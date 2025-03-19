import useGame from '@/hooks/useGame';
import { Box, Heading, HStack, Spinner, Text } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';

const GameDetailPage = () => {
  const { slug } = useParams();
  const { data: game, error, isLoading } = useGame(slug!);

  if (isLoading)
    return (
      <HStack justifyContent='center' margin={5}>
        <Spinner />
      </HStack>
    );

  if (error || !game) throw error;

  return (
    <Box padding={5}>
      <Heading size='4xl' fontWeight='bold'>
        {game?.name}
      </Heading>
      <Text mt={5}>{game.description_raw}</Text>
    </Box>
  );
};

export default GameDetailPage;
