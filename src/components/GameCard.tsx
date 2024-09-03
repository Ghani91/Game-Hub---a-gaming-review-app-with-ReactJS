import { Card, CardBody, Heading, Image } from "@chakra-ui/react";
import { Game } from "../services/useGames";
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
      </CardBody>
    </Card>
  );
};

export default GameCard;
