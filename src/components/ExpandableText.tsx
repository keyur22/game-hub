import { Button, Text } from '@chakra-ui/react';
import { useState } from 'react';

interface Props {
  children: string;
}

const ExpandableText = ({ children, ...props }: Props) => {
  const [expanded, setExpanded] = useState(false);
  const limit = 300;
  const summary = expanded ? children : children.substring(0, limit) + '...';

  if (!children) return null;

  return (
    <Text {...props}>
      {summary}{' '}
      <Button
        size='xs'
        fontWeight='bold'
        variant='surface'
        colorPalette='yellow'
        onClick={() => setExpanded(!expanded)}
      >
        {expanded ? 'Show less' : 'Read more'}
      </Button>
    </Text>
  );
};

export default ExpandableText;
