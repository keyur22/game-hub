import { Game } from '@/hooks/useGames';
import { Card, CardBody, Heading, HStack, Image } from '@chakra-ui/react';
import PlatformIcons from './PlatformIcons';
import CriticScore from './CriticScore';
import { getPlatformIconsList } from '@/utils/platform-icons';
import { getCroppedImageUrl } from '@/services/image-url';
import { useNavigate } from 'react-router-dom';

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  const navigate = useNavigate();

  return (
    <Card.Root
      borderRadius={10}
      overflow='hidden'
      boxShadow={'2xl'}
      cursor='pointer'
      _hover={{
        transform: 'scale(1.03)',
        transition: 'transform 0.3s ease-in-out'
      }}
      onClick={() => navigate(`games/${game.slug}`)}
    >
      <Image
        src={getCroppedImageUrl(game.background_image)}
        loading='lazy'
        alt={game.name}
      />
      <CardBody>
        <Heading>{game.name}</Heading>
        <HStack
          gap={3}
          pt={5}
          justifyContent='space-between'
          alignItems='center'
        >
          <PlatformIcons
            platforms={getPlatformIconsList(game.parent_platforms)}
          />
          <CriticScore criticScore={game.metacritic} />
        </HStack>
      </CardBody>
    </Card.Root>
  );
};

export default GameCard;
