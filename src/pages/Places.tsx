import { Box } from "@chakra-ui/react";
import { PlacesList } from "../components/PlacesList";
import { Navbar } from "../components/Navbar";

export const Places = () => {
  return (
    <Box>
      <Navbar />
      <Box
        minW={"100wh"}
        minH={"100vh"}
        p={{
          base: "100px 1rem 1rem 1rem",
          sm: "100px 1rem 1rem 1rem",
          md: "100px 2rem 2rem 2rem",
          lg: "100px 5rem 2rem 5rem",
          xl: "100px 5rem 2rem 5rem",
          "2xl": "100px 5rem 2rem 5rem",
        }}
      >
        <PlacesList str1={"Search your"} str2={"destination"} />
      </Box>
    </Box>
  );
};
