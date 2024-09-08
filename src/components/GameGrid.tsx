import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../services/useGames";
import GameCard from "./GameCard";
import CardSkeleton from "./CardSkeleton";
import GameCardContainer from "./GameCardContainer";
const GameGrid = () => {
  const { games, errors, isLoading } = useGames();
  const figure = [1, 2, 3, 4, 5, 6];
  console.log(isLoading);
  return (
    <>
      {errors && <Text>{errors}</Text>}
      <Text>My Games</Text>
      <SimpleGrid columns={{ sm: 1, md: 2, xl: 3 }} padding={5}>
        {isLoading &&
          figure.map((fig) => (
            <GameCardContainer key={fig}>
              <CardSkeleton />
            </GameCardContainer>
          ))}
        {games.map((game) => (
          <GameCardContainer key={game.id}>
            <GameCard game={game} />
          </GameCardContainer>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
