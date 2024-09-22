import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

interface Props {
  handleChangeInput: (search: string) => void;
}
const NavBar = ({ handleChangeInput }: Props) => (
  <HStack padding="10px">
    <Image borderRadius="full" boxSize="60px" src={logo} alt="Dan Abramov" />
    <SearchInput onChangeInput={handleChangeInput} />
    <ColorModeSwitch />
  </HStack>
);

export default NavBar;
