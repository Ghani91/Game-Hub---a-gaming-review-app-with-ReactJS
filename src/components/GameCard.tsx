import { Card, CardBody, Heading, HStack, Image } from "@chakra-ui/react";
import { Game } from "../services/useGames";
import PlatformIconList from "./PlatformIconList";
import ScoreCard from "./CriticScore";
import imageUrl from "../services/image-url";
import Emoji from "./Emoji";
interface Props {
  game: Game;
}
const GameCard = ({ game }: Props) => {
  return (
    <Card>
      <Image src={imageUrl(game.background_image)} width={"auto"} />
      <CardBody>
        <HStack
          justifyContent={"space-between"}
          paddingX={5}
          flexWrap={"nowrap"}
        >
          <PlatformIconList platforms={game.platforms.map((p) => p.platform)} />
          <ScoreCard metaCritic={game.metacritic} />
        </HStack>
        <Heading
          fontSize="2xl"
          textAlign={"center"}
          color={"gray"}
          whiteSpace={"normal"}
        >
          {game.name}
        </Heading>
        <Emoji rating={game.rating_top} />
      </CardBody>
    </Card>
  );
};

export default GameCard;
