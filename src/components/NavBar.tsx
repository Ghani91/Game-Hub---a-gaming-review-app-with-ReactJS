import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";

const NavBar = () => (
  <HStack justifyContent="space-between" padding="10px">
    <Image borderRadius="full" boxSize="60px" src={logo} alt="Dan Abramov" />
    <Text as="h1"> Gaming Hub - a true friend of gamers</Text>
    <ColorModeSwitch />
  </HStack>
);

export default NavBar;
