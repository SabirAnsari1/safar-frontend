import { Center, Image, useColorMode } from "@chakra-ui/react";
import underConstruction from "../assets/images/underConstruction.png";

export const Community = () => {
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
      <Image src={underConstruction} alt="Page Doesn't Exist" />
    </Center>
    // <Image
    //   src={underConstruction}
    //   minW={"100%"}
    //   minH={"100%"}
    //   zIndex={"1"}
    //   pos={"fixed"}
    //   top={"0"}
    // />
  );
};
