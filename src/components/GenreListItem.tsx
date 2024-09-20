import { Avatar, Button, HStack } from "@chakra-ui/react";
import { Genre } from "../hooks/useGenre";
interface Props {
  genre: Genre;
  setGenre: (genre: Genre) => void;
}
const GenreListItem = ({ genre, setGenre }: Props) => {
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
      <Button fontSize={"2xl"} variant={"link"} onClick={() => setGenre(genre)}>
        {genre.name}
      </Button>
    </HStack>
  );
};

export default GenreListItem;
