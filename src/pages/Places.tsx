import { Box } from "@chakra-ui/react";
import { PlacesList } from "../components/PlacesList";

export const Places = () => {
  return (
    <Box minH={"92vh"}>
      <PlacesList str1={"Search your"} str2={"destination"} />
    </Box>
  );
};
