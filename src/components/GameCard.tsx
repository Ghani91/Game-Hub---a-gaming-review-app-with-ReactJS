import { Card, CardBody, Heading, Image, Text } from "@chakra-ui/react";
import { Game } from "../services/useGames";
import PlatformIconList from "./PlatformIconList";
interface Props {
  game: Game;
}
const GameCard = ({ game }: Props) => {
  return (
    <Card border={10} overflow={"hidden"}>
      <Image src={game.background_image} width={"auto"} />
      <CardBody>
        <Heading fontSize="2xl" textAlign={"center"}>
          {game.name}
        </Heading>
        <PlatformIconList platforms={game.platforms.map((p) => p.platform)} />
      </CardBody>
    </Card>
  );
};

export default GameCard;
