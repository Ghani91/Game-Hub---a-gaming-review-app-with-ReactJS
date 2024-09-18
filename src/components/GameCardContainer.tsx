import { Box } from "@chakra-ui/react";

interface Props {
  children: React.ReactNode;
}

const GameCardContainer = ({ children }: Props) => {
  return (
    <Box borderRadius={4} overflow={"hidden"} marginY={4}>
      {children}
    </Box>
  );
};

export default GameCardContainer;
