import useGenre from "../hooks/useGenre";
import { Text } from "@chakra-ui/react";
import GenreListItem from "./GenreListItem";

const GenreList = () => {
  const { genre, errors, isLoading } = useGenre();
  return (
    <>
      {errors && <Text>{errors}</Text>}
      <Text>
        {genre.map((gen) => (
          <GenreListItem genre={gen} key={gen.id} />
        ))}
      </Text>
    </>
  );
};

export default GenreList;
