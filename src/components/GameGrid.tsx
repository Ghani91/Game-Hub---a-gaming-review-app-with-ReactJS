import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../services/useGames";
import { Spinner } from "@chakra-ui/react";
import GameCard from "./GameCard";
const GameGrid = () => {
  const { games, errors, isLoading } = useGames();
  console.log(isLoading);
  return (
    <>
      {errors && <Text>{errors}</Text>}
      <Text>My Games</Text>
      {isLoading && <Spinner my={4} color="red" />}
      <SimpleGrid columns={{ sm: 1, md: 2, xl: 3 }} spacing={10} padding={5}>
        {games.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
