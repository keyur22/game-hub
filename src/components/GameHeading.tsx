import { GameQuery } from '@/App';
import { Heading, Text } from '@chakra-ui/react';

interface Props {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
  const { platform, genre } = gameQuery;

  const label = `${genre?.name || ''} ${platform?.name || ''}`;

  return (
    <Heading size='4xl' fontWeight='bold' p={3}>
      <Text as='span' color='pink.400'>
        {label}
      </Text>{' '}
      Games
    </Heading>
  );
};

export default GameHeading;
