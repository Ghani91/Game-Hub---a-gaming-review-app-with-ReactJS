import useGenre, { Genre } from "../hooks/useGenre";
import { Heading, ListItem, Text, UnorderedList } from "@chakra-ui/react";
import GenreListItem from "./GenreListItem";
import GenreSkeleton from "./GenreSkeleton";

interface Props {
  onSelectGenre: (genre: Genre) => void;
}
const GenreList = ({ onSelectGenre }: Props) => {
  const { data, errors, isLoading } = useGenre();
  const genreList = [1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <>
      <Heading as={"h2"} textAlign={"center"} color={"gray.400"}>
        Genres
      </Heading>
      {errors && <Text>{errors}</Text>}
      {isLoading && genreList.map((gen) => <GenreSkeleton key={gen} />)}
      <UnorderedList styleType={"none"}>
        {data.map((gen) => (
          <ListItem key={gen.id}>
            <GenreListItem genre={gen} setGenre={onSelectGenre} />
          </ListItem>
        ))}
      </UnorderedList>
    </>
  );
};

export default GenreList;
