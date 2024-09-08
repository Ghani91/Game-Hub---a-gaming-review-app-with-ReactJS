import useGenre from "../hooks/useGenre";
import { ListItem, Text, UnorderedList } from "@chakra-ui/react";
import GenreListItem from "./GenreListItem";
import GenreSkeleton from "./GenreSkeleton";

const GenreList = () => {
  const { genre, errors, isLoading } = useGenre();
  const genreList = [1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <>
      {errors && <Text>{errors}</Text>}
      {isLoading && genreList.map((gen) => <GenreSkeleton key={gen} />)}
      <UnorderedList styleType={"none"}>
        {genre.map((gen) => (
          <ListItem key={gen.id}>
            <GenreListItem genre={gen} />
          </ListItem>
        ))}
      </UnorderedList>
    </>
  );
};

export default GenreList;
