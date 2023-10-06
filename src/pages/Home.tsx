import { Box } from "@chakra-ui/react";
import { ImageSlider } from "../components/ImageSlider";
import { HomeList } from "../components/HomeList";
import { SeeMore } from "../components/SeeMore";
import { Thanks } from "../components/Thanks";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";

export const Home = () => {
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
        <ImageSlider />
        <HomeList str1={"Popular Destinations"} str2={"for new"} />
        <SeeMore str1={"Discover"} str2={"World Travel"} str3={"Experiences"} />
        <Thanks str1={"Thanks"} str2={"for your"} str3={"Support"} />
        <Footer />
      </Box>
    </Box>
  );
};
