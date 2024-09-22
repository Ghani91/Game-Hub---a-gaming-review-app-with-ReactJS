import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../services/useGames";
import GameCard from "./GameCard";
import CardSkeleton from "./CardSkeleton";
import GameCardContainer from "./GameCardContainer";
import { GameQuerry } from "../App";
interface Props {
  gameQuerry: GameQuerry;
}
const GameGrid = ({ gameQuerry }: Props) => {
  const { data, errors, isLoading } = useGames(gameQuerry);
  const figure = [1, 2, 3, 4, 5, 6];
  console.log(isLoading);
  return (
    <>
      {errors && <Text>{errors}</Text>}

      <SimpleGrid columns={{ sm: 1, md: 2, xl: 3 }} padding={2} spacing={6}>
        {isLoading &&
          figure.map((fig) => (
            <GameCardContainer key={fig}>
              <CardSkeleton />
            </GameCardContainer>
          ))}
        {data.map((game) => (
          <GameCardContainer key={game.id}>
            <GameCard game={game} />
          </GameCardContainer>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
