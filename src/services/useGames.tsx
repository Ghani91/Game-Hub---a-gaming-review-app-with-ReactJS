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
        genre: gameQuerry.genre?.id,
        platform: gameQuerry.platform?.id,
      },
    },
    [gameQuerry]
  );

export default useGames;
