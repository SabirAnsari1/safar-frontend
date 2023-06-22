import { Box } from "@chakra-ui/react";
import { ImageSlider } from "../components/ImageSlider";
import { HomeList } from "../components/HomeList";
import { SeeMore } from "../components/SeeMore";
import { Thanks } from "../components/Thanks";
import { Footer } from "../components/Footer";

export const Home = () => {
  return (
    <Box>
      <ImageSlider />
      <HomeList str1={"Popular Destinations"} str2={"for new"} />
      <SeeMore str1={"Discover"} str2={"World Travel"} str3={"Experiences"} />
      <Thanks str1={"Thanks"} str2={"for your"} str3={"Support"} />
      <Footer />
    </Box>
  );
};
