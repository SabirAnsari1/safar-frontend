import { Center, Image, useColorMode } from "@chakra-ui/react";
import underConstruction from "../assets/images/underConstruction.png";

export const About = () => {
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
      <Image src={underConstruction} borderRadius={"5px"} />
    </Center>
  );
};
