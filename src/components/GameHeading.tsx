import { Heading, HStack } from "@chakra-ui/react";
import { GameQuerry } from "../App";

interface Props {
  gameQuerry: GameQuerry;
}
const GameHeading = ({ gameQuerry }: Props) => {
  return (
    <HStack
      marginBottom={4}
      textAlign={"center"}
      display={"flex"}
      justifyContent={"center"}
    >
      <Heading size="lg" fontSize="50px" as={"h2"}>
        {" "}
        {gameQuerry.platform?.name}
      </Heading>
      <Heading size="lg" fontSize="50px" as={"h2"}>
        {gameQuerry.genre?.name}{" "}
      </Heading>
      <Heading size="lg" fontSize="50px" as={"h2"}>
        Games
      </Heading>
    </HStack>
  );
};

export default GameHeading;
