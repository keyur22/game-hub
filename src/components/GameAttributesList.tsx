import { Game } from '@/entities/Game';
import { SimpleGrid, Text } from '@chakra-ui/react';
import GameAttribute from './GameAttribute';
import CriticScore from './CriticScore';

interface Props {
  game: Game;
}

const GameAttributesList = ({ game }: Props) => {
  const { parent_platforms, metacritic, genres, publishers } = game;

  return (
    <SimpleGrid columns={2} gap={5} mt={10} as='dl'>
      <GameAttribute title='Platform'>
        {parent_platforms.map(({ platform }) => (
          <Text key={platform.id} my={1}>
            {platform.name}
          </Text>
        ))}
      </GameAttribute>
      <GameAttribute title='MetaScore'>
        <CriticScore criticScore={metacritic} />
      </GameAttribute>
      <GameAttribute title='Genres'>
        {genres.map((genre) => (
          <Text key={genre.id} my={1}>
            {genre.name}
          </Text>
        ))}
      </GameAttribute>
      <GameAttribute title='Publishers'>
        {publishers.map((publisher) => (
          <Text key={publisher.id} my={1}>
            {publisher.name}
          </Text>
        ))}
      </GameAttribute>
    </SimpleGrid>
  );
};

export default GameAttributesList;
