import { Card, CardBody, Heading, HStack, Image } from "@chakra-ui/react";
import { Game } from "../services/useGames";
import PlatformIconList from "./PlatformIconList";
import ScoreCard from "./CriticScore";
import imageUrl from "../services/image-url";
interface Props {
  game: Game;
}
const GameCard = ({ game }: Props) => {
  return (
    <Card>
      <Image src={imageUrl(game.background_image)} width={"auto"} />
      <CardBody>
        <Heading
          fontSize="2xl"
          textAlign={"center"}
          color={"gray"}
          whiteSpace={"normal"}
        >
          {game.name}
        </Heading>

        <HStack
          justifyContent={"space-between"}
          paddingX={5}
          flexWrap={"nowrap"}
        >
          <PlatformIconList platforms={game.platforms.map((p) => p.platform)} />
          <ScoreCard metaCritic={game.metacritic} />
        </HStack>
      </CardBody>
    </Card>
  );
};

export default GameCard;
