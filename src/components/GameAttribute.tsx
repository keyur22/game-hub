import { Box, Heading } from '@chakra-ui/react';
import { ReactNode } from 'react';

interface Props {
  title: string;
  children: ReactNode | ReactNode[];
}

const GameAttribute = ({ title, children }: Props) => {
  return (
    <Box>
      <Heading as='dt' fontSize='md' color='gray.600' mb={2}>
        {title}
      </Heading>
      <dd>{children}</dd>
    </Box>
  );
};

export default GameAttribute;
