import { Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import "./App.css";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenre";
import { Platform } from "./services/useGames";
import PlatformsMenu from "./components/PlatformsMenu";
import SortSelector from "./components/SortSelector";

export interface GameQuerry {
  genre: Genre | null;
  platform: Platform | null;
}
function App() {
  const [gameQuerry, setGameQuerry] = useState<GameQuerry>({} as GameQuerry);
  return (
    <>
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav" "aside main"`,
        }}
      >
        <GridItem area="nav">
          <NavBar />
        </GridItem>
        <Show above="lg">
          <GridItem area="aside">
            <GenreList
              selectedGenre={gameQuerry.genre}
              onSelectGenre={(genre) => setGameQuerry({ ...gameQuerry, genre })}
            />
          </GridItem>
        </Show>
        <GridItem area="main">
          <HStack spacing={5} marginBottom={5} paddingLeft={2}>
            <PlatformsMenu
              selectedPlatform={gameQuerry.platform}
              onSelect={(platform) =>
                setGameQuerry({ ...gameQuerry, platform })
              }
            />
            <SortSelector />
          </HStack>
          <GameGrid gameQuerry={gameQuerry} />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
