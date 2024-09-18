import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react"; //-
/**A functional component that renders a skeleton UI for a card.//+
 * The card includes a skeleton image and a skeleton text component.//+
 *@return{JSX.Element} - A JSX element representing the skeleton card UI.//+
 */ //+
const CardSkeleton = () => {
  return (
    <Card>
      <Skeleton width={"500px"} height={"400px"} />
      <CardBody>
        <SkeletonText />
      </CardBody>
    </Card>
  );
}; //-
//-
export default CardSkeleton;

// write a react component for CardSkeleton that renders   a skeleton  UI for a card
