import { useEffect, useState } from "react";
import apiClient from "./api-client";
interface Game {
  id: number;
  name: string;
}
interface FetchGames {
  count: number;
  results: Game;
}
const useGames = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [errors, setErrors] = useState("");
  const [isLoading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    apiClient
      .get<FetchGames>("/games")
      .then((resp) => {
        setGames(resp.data.results);
        setLoading(false);
      })
      .catch((errs) => {
        setErrors(errs.message);
        setLoading(false);
      });
  }, []);
  return { games, errors, isLoading };
};

export default useGames;
