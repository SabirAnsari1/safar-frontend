import { Box, Center, Image, useColorMode } from "@chakra-ui/react";
import pageNotFound from "../assets/images/pageNotFound.png";

export const PageNotFound = () => {
  const { colorMode } = useColorMode();

  return (
    <Center
      bg={colorMode === "light" ? "white" : "black"}
      minW={"100%"}
      minH={"100%"}
      zIndex={"1"}
      pos={"fixed"}
      top={"0"}
    >
      <Image src={pageNotFound} alt="Page Not Found" />
    </Center>

    // <Image src={pageNotFound} minW={"100%"} minH={"100%"} zIndex={"1"} pos={"fixed"} top={"0"} />
  );
};
