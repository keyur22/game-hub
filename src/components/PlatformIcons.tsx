import { Platform } from '@/entities/Platform';
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
  platforms: Platform[] | null;
}

const iconMap: { [key: string]: ReactNode } = {
  pc: <FaWindows />,
  playstation: <FaPlaystation />,
  xbox: <FaXbox />,
  mac: <FaApple />,
  nintendo: <SiNintendo />,
  linux: <FaLinux />,
  android: <FaAndroid />,
  ios: <MdPhoneIphone />,
  web: <BsGlobe />
};

const PlatformIcons = ({ platforms }: Props) => {
  if (!platforms?.length) return null;

  return (
    <HStack gap={3} flexWrap='wrap'>
      {platforms.map((x) => (
        <span key={x.id}>{iconMap[x.slug]}</span>
      ))}
    </HStack>
  );
};

export default PlatformIcons;
