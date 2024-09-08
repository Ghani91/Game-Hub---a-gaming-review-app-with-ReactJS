import { Avatar, HStack, Text } from "@chakra-ui/react";
import { Genre } from "../hooks/useGenre";
interface Props {
  genre: Genre;
}
const GenreListItem = ({ genre }: Props) => {
  return (
    <HStack
      overflow={"none"}
      width={"250px"}
      marginY={4}
      borderBottom={"1px solid gray"}
      padding={2}
      justifyContent={"flex-start"}
      cursor={"pointer"}
      borderRadius={4}
      _hover={{ bg: "blue.500", color: " white" }}
    >
      <Avatar src={genre.image_background} marginRight={1} />
      <Text fontSize={"2xl"}>{genre.name}</Text>
    </HStack>
  );
};

export default GenreListItem;
