import { useState } from "react";
import apiClient from "../services/api-client";
import { Text } from "@chakra-ui/react";

interface Game {
  id: number;
  name: string;
}
interface FetchGames {
  count: number;
  results: Game;
}

const GameGrid = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [errors, setErrors] = useState("");
  useState(() => {
    apiClient
      .get<FetchGames>("/games")
      .then((resp) => setGames(resp.data.results))
      .catch((errs) => setErrors(errs.message));
  });
  return (
    <>
      {errors && <Text>{errors}</Text>}
      <Text>My Games</Text>
      {games.map((game) => (
        <Text>{game.name}</Text>
      ))}
    </>
  );
};

export default GameGrid;
