import { Heading, SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../services/useGames";
import GameCard from "./GameCard";
import CardSkeleton from "./CardSkeleton";
import GameCardContainer from "./GameCardContainer";
import { Genre } from "../hooks/useGenre";
interface Props {
  selectedGenre: Genre | null;
}
const GameGrid = ({ selectedGenre }: Props) => {
  const { data, errors, isLoading } = useGames(selectedGenre);
  const figure = [1, 2, 3, 4, 5, 6];
  console.log(isLoading);
  return (
    <>
      {errors && <Text>{errors}</Text>}
      <Heading as={"h2"} textAlign={"center"} color={"gray.400"}>
        Games
      </Heading>
      <SimpleGrid columns={{ sm: 1, md: 2, xl: 3 }} padding={2} spacing={2}>
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
