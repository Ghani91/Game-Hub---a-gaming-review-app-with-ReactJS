import { useEffect, useState } from "react";
import apiClient from "./api-client";
import { CanceledError } from "axios";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}
export interface Game {
  id: number;
  name: string;
  background_image: string;
  platforms: { platform: Platform }[];
  metacritic: number;
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
    const controller = new AbortController();
    setLoading(true);
    apiClient
      .get<FetchGames>("/games", { signal: controller.signal })
      .then((resp) => {
        setGames(resp.data.results);
        setLoading(false);
      })
      .catch((errs) => {
        if (errs instanceof CanceledError) return;
        setErrors(errs.message);
        setLoading(false);
      });
    return () => {
      controller.abort();
    };
  }, []);
  return { games, errors, isLoading };
};

export default useGames;
