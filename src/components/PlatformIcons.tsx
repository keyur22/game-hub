import { Platform } from '@/hooks/useGames';
import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid
} from 'react-icons/fa';

import { MdPhoneIphone } from 'react-icons/md';
import { SiNintendo } from 'react-icons/si';
import { BsGlobe } from 'react-icons/bs';
import { HStack } from '@chakra-ui/react';
import { ReactNode } from 'react';

interface Props {
  platforms: Platform[];
}

const iconMap: { [key: string]: ReactNode } = {
  pc: <FaWindows />,
  playstation: <FaPlaystation />,
  xbox: <FaXbox />,
  mac: <FaApple />,
  'nintendo-switch': <SiNintendo />,
  linux: <FaLinux />,
  android: <FaAndroid />,
  ios: <MdPhoneIphone />,
  web: <BsGlobe />
};

const PlatformIcons = ({ platforms }: Props) => {
  return (
    <HStack py={4}>
      {platforms.map((x) => (
        <span key={x.id}>{iconMap[x.slug]}</span>
      ))}
    </HStack>
  );
};

export default PlatformIcons;
