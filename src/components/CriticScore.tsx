import { Badge } from '@chakra-ui/react';

interface Props {
  criticScore: number;
}

const CriticScore = ({ criticScore }: Props) => {
  const color = criticScore > 75 ? 'green' : criticScore > 60 ? 'yellow' : '';

  if (!criticScore) return null;

  return (
    <Badge
      colorPalette={color}
      size='md'
      py='1'
      borderRadius='md'
      variant='solid'
    >
      {criticScore}
    </Badge>
  );
};

export default CriticScore;
