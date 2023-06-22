import { Box, Flex, Text, Center, Image, Button } from "@chakra-ui/react";
import eleven from "../assets/images/11.jpg";
import twelve from "../assets/images/12.jpg";
import thirteen from "../assets/images/13.jpg";
import { Link } from "react-router-dom";

const seeMore = [
  { img: eleven, quote: "Great for groups on your trip" },
  { img: twelve, quote: "Most popular around the world" },
  { img: thirteen, quote: "No road is long with good company" },
];

interface SeeMoreProp {
  str1: string;
  str2: string;
  str3: string;
}

export const SeeMore = ({ str1, str2, str3 }: SeeMoreProp) => {
  return (
    <Box
      p={{
        base: "1rem 1rem",
        sm: "1rem 1rem",
        md: "1rem 2rem",
        lg: "2rem 5rem",
        xl: "2rem 5rem",
        "2xl": "3rem 5rem",
      }}
    >
      {/* first */}
      <Center mb={"2rem"}>
        <Flex
          direction={{
            base: "column",
            sm: "column",
            md: "row",
            lg: "row",
            xl: "row",
            "2xl": "row",
          }}
          textAlign={"center"}
        >
          <Text
            fontSize={{
              base: "2xl",
              sm: "2xl",
              md: "3xl",
              lg: "4xl",
              xl: "4xl",
              "2xl": "4xl",
            }}
            fontFamily={"cursive"}
            fontWeight={"bold"}
            mr={".6rem"}
            color={"#f1095d"}
          >
            {str1}
          </Text>

          <Text
            fontSize={{
              base: "2xl",
              sm: "2xl",
              md: "3xl",
              lg: "4xl",
              xl: "4xl",
              "2xl": "4xl",
            }}
            mr={".6rem"}
            fontWeight={"hairline"}
            color={"#567eb9"}
          >
            {str2}
          </Text>

          <Text
            fontSize={{
              base: "2xl",
              sm: "2xl",
              md: "3xl",
              lg: "4xl",
              xl: "4xl",
              "2xl": "4xl",
            }}
            fontFamily={"cursive"}
            fontWeight={"bold"}
            mr={".6rem"}
            color={"#f1095d"}
          >
            {str3}
          </Text>
        </Flex>
      </Center>

      {/* second */}
      <Flex justify={"space-between"}>
        {seeMore?.map(({ img, quote }, index) => (
          <Flex w={"30%"} pos={"relative"} key={index}>
            <Image src={img} alt={`See more`} borderRadius={"5px"} w={"100%"} />

            <Box
              w={"40%"}
              pos={"absolute"}
              bg={"#567eb9"}
              opacity={".6"}
              borderRadius={"0px 5px  5px 0px"}
              textAlign={"center"}
              top={"20px"}
              p={".2rem"}
              color={"white"}
              boxShadow={
                "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px"
              }
              display={{
                base: "none",
                sm: "none",
                md: "flex",
                lg: "flex",
                xl: "flex",
                "2xl": "flex",
              }}
            >
              {quote}
            </Box>

            <Link to={"/places"}>
              <Button
                bgColor={"#f1095d"}
                mt={".5rem"}
                pos={"absolute"}
                bottom={"20px"}
                right={"20px"}
                opacity={".6"}
                color={"white"}
                size={{
                  base: "xs",
                  sm: "sm",
                  md: "sm",
                  lg: "md",
                  xl: "md",
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
          </Flex>
        ))}
      </Flex>
    </Box>
  );
};
