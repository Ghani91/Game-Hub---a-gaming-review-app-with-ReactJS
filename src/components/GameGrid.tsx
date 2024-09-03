import { Text } from "@chakra-ui/react";
import useGames from "../services/useGames";
import { Spinner } from "@chakra-ui/react";
const GameGrid = () => {
  const { games, errors, isLoading } = useGames();
  console.log(isLoading);
  return (
    <>
      {errors && <Text>{errors}</Text>}

      <Text>My Games</Text>
      {isLoading && <Spinner my={4} color="red" />}
      <ul>
        {games.map((game) => (
          <li key={game.id}>{game.name}</li>
        ))}
      </ul>
    </>
  );
};

export default GameGrid;
