import { Image, ImageProps } from "@chakra-ui/react";
import BullsEys from "../assets/bulls-eye.webp";
import Meh from "../assets/meh.webp";
import ThumbsUp from "../assets/thumbs-up.webp";
interface Props {
  rating: number;
}
const Emoji = ({ rating }: Props) => {
  const EmojiMap: { [key: number]: ImageProps } = {
    3: { src: Meh, alt: "Meh", boxSize: "25px" },
    4: { src: ThumbsUp, alt: "recommendec", boxSize: "35px" },
    5: { src: BullsEys, alt: "exceptional", boxSize: "45px" },
  };
  return <Image {...EmojiMap[rating]} />;
};

export default Emoji;
