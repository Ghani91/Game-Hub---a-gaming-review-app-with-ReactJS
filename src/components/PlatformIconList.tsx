import { HStack, Icon, Text } from "@chakra-ui/react";
import { Platform } from "../services/useGames";
import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { IconType } from "react-icons";

interface Props {
  platforms: Platform[];
}

const PlatformIconList = ({ platforms }: Props) => {
  const iconMap: { [key: string]: IconType } = {
    pc: FaWindows,
    playstation5: FaPlaystation,
    playstation3: FaPlaystation,
    playstation4: FaPlaystation,
    "xbox-one": FaXbox,
    xbox360: FaXbox,
    "xbox-series-x": FaXbox,
    "nintendo-switch": SiNintendo,
    macos: FaApple,
    linux: FaLinux,
    android: FaAndroid,
    ios: MdPhoneIphone,
    web: BsGlobe,
  };
  return (
    <HStack
      marginY={5}
      justifyItems={"center"}
      alignItems={"center"}
      justifyContent={"center"}
    >
      {platforms.map((platform) => (
        <Icon
          as={iconMap[platform.slug]}
          boxSize={8}
          color="gray.500"
          key={platform.id}
        />
      ))}
    </HStack>
  );
};

export default PlatformIconList;
