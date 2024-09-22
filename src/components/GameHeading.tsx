import { Heading } from "@chakra-ui/react";
import { GameQuerry } from "../App";

interface Props {
  gameQuerry: GameQuerry;
}
const GameHeading = ({ gameQuerry }: Props) => {
  const heading = `${gameQuerry.platform?.name || ""} ${
    gameQuerry.genre?.name || ""
  } Games`;
  return (
    <Heading size="lg" fontSize="50px" as={"h1"} textAlign={"center"}>
      {heading}
    </Heading>
  );
};

export default GameHeading;
