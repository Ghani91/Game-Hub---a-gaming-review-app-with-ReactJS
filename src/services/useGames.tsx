import { GameQuerry } from "../App";
import useData from "../hooks/useData";

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

const useGames = (gameQuerry: GameQuerry) =>
  useData<Game>(
    "/games",
    {
      params: {
        genres: gameQuerry.genre?.id,
        platforms: gameQuerry.platform?.id,
        ordering: gameQuerry.ordering,
        search: gameQuerry.search,
      },
    },
    [gameQuerry]
  );

export default useGames;
