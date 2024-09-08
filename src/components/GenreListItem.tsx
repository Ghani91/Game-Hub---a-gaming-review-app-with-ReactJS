import { Avatar, Heading, HStack, Text } from "@chakra-ui/react";
import { Genre } from "../hooks/useGenre";
interface Props {
  genre: Genre;
}
const GenreListItem = ({ genre }: Props) => {
  return (
    <HStack marginY={4}>
      <Avatar src={genre.image_background} marginRight={1} />
      <Text fontSize={"2xl"}>{genre.name}</Text>
    </HStack>
  );
};

export default GenreListItem;
