import { Text, Grid, Image, useColorMode, Icon, Box, Flex, Button } from "@chakra-ui/react";
import { Home } from "../utils/types";
import { AiFillStar } from "react-icons/ai";
import { BsFillSuitHeartFill } from "react-icons/bs";
import { Link } from "react-router-dom";

export const HomeCard = ({ id, img, city, country, price, rating }: Home) => {
  const { colorMode } = useColorMode();

  return (
    <Grid borderRadius="5px" w={"100%"} pos={"relative"}>
      {/* first */}
      <Image
        src={img}
        alt={city}
        w={"100%"}
        minH={"200px"}
        maxH={"200px"}
        borderRadius="5px"
        cursor={"pointer"}
        transition="transform .5s"
        _hover={{
          cursor: "pointer",
          transform: "scale(0.9)",
        }}
      />

      {/* second */}
      <Box pos={"absolute"} top={"5%"} right={"7%"}>
        <Icon aria-label="favorite" as={BsFillSuitHeartFill} color={"#f1095d"} />
      </Box>

      {/* third */}
      <Link to={"/places"}>
        <Button
          bgColor={"#f1095d"}
          pos={"absolute"}
          top={"60%"}
          right={"7%"}
          opacity={".6"}
          color={"white"}
          size={{
            base: "xs",
            sm: "sm",
            md: "sm",
            lg: "sm",
            xl: "sm",
            "2xl": "md",
          }}
          _hover={{
            bg: "#fff",
            border: "4px double #f1095d",
            color: "#f1095d",
          }}
        >
          See More
        </Button>
      </Link>

      {/* forth */}
      <Flex justify={"space-between"} mt={".3rem"}>
        <Text fontWeight={"semibold"} color={colorMode === "light" ? "black" : "white"}>
          {city}, {country}
        </Text>

        {/* fifth */}
        <Box>
          <Icon aria-label="rating" as={AiFillStar} color={"#567eb9"} /> {rating}
        </Box>
      </Flex>

      {/* sixth */}
      <Text>₹ {price}</Text>
    </Grid>
  );
};
