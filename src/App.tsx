import { Box, Flex, Grid, GridItem, Show } from "@chakra-ui/react";
import "./App.css";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenre";
import { Platform } from "./services/useGames";
import PlatformsMenu from "./components/PlatformsMenu";
import SortSelector from "./components/SortSelector";
import GameHeading from "./components/GameHeading";

export interface GameQuerry {
  genre: Genre | null;
  platform: Platform | null;
  ordering: string;
  search: string | null;
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
          <NavBar
            handleChangeInput={(search: string) =>
              setGameQuerry({ ...gameQuerry, search })
            }
          />
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
          <GameHeading gameQuerry={gameQuerry} />
          <Flex marginBottom={5} paddingLeft={2}>
            <Box marginRight={5}>
              <PlatformsMenu
                selectedPlatform={gameQuerry.platform}
                onSelect={(platform) =>
                  setGameQuerry({ ...gameQuerry, platform })
                }
              />
            </Box>
            <SortSelector
              onSelectSortOrder={(ordering) =>
                setGameQuerry({ ...gameQuerry, ordering })
              }
            />
          </Flex>
          <GameGrid gameQuerry={gameQuerry} />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
