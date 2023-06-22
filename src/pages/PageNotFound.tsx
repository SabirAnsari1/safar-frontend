import { Center, Image, useColorMode } from "@chakra-ui/react";
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
      borderRadius={"5px"}
    >
      <Image src={pageNotFound} borderRadius={"5px"} />
    </Center>
  );
};
