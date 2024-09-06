import { Badge } from "@chakra-ui/react";
interface Props {
  metaCritic: number;
}

const ScoreCard = ({ metaCritic }: Props) => {
  const color = metaCritic > 90 ? "green" : metaCritic > 75 ? "yellow" : "";
  return (
    <Badge
      colorScheme={color}
      paddingY={2}
      paddingX={4}
      borderRadius={10}
      fontSize={20}
    >
      {metaCritic}
    </Badge>
  );
};

export default ScoreCard;
