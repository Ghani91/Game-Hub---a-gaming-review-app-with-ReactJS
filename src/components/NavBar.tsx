import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

const NavBar = () => (
  <HStack padding="10px">
    <Image borderRadius="full" boxSize="60px" src={logo} alt="Dan Abramov" />
    <SearchInput />
    <ColorModeSwitch />
  </HStack>
);

export default NavBar;
