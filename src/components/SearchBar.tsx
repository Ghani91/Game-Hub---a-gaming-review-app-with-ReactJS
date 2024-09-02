import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/logo.webp";

const SearchBar = () => (
  <HStack>
    <Image borderRadius="full" boxSize="60px" src={logo} alt="Dan Abramov" />
    <Text as="h1"> Gaming Hub - a true friend of gamers</Text>
  </HStack>
);

export default SearchBar;
