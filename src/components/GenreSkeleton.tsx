import {
  Box,
  Card,
  CardBody,
  HStack,
  Skeleton,
  SkeletonCircle,
  SkeletonText,
  Stack,
} from "@chakra-ui/react";

const GenreSkeleton = () => {
  return (
    /* The code snippet you provided is creating a skeleton loading component for a genre card in a
   React application using Chakra UI components. The `<Skeleton>` component is used to display a
   loading animation with a specified height of 400px, indicating that content is being loaded. The
   `<SkeletonText>` component is used to display a loading animation for text content within the
   card. */
    <Box width={"250px"} marginY={4} padding={2} justifyContent={"flex-start"}>
      <SkeletonCircle size="10" />
      <SkeletonText mt="4" noOfLines={1} spacing="4" skeletonHeight="2" />
    </Box>
  );
};

export default GenreSkeleton;
