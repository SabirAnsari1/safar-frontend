import { Flex, Image, Box, Text, Button, Center, useColorMode } from "@chakra-ui/react";
import donate from "../assets/images/donate.png";
import lightMap from "../assets/images/lightMap.jpg";
import darkMap from "../assets/images/darkMap.jpg";
import { Link } from "react-router-dom";

interface ThanksProp {
  str1: string;
  str2: string;
  str3: string;
}

export const Thanks = ({ str1, str2, str3 }: ThanksProp) => {
  const { colorMode } = useColorMode();

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
        <Flex>
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
      <Flex
        direction={{
          base: "column",
          sm: "column",
          md: "column",
          lg: "row",
          xl: "row",
          "2xl": "row",
        }}
      >
        {/* second.1 */}
        <Box
          borderRadius={{
            base: "5px",
            sm: "5px",
            md: "5px",
            lg: "5px 0px 0px 5px",
            xl: "5px 0px 0px 5px",
            "2xl": "5px 0px 0px 5px",
          }}
        >
          <Image
            src={colorMode === "light" ? lightMap : darkMap}
            borderRadius={{
              base: "5px",
              sm: "5px",
              md: "5px",
              lg: "5px 0px 0px 5px",
              xl: "5px 0px 0px 5px",
              "2xl": "5px 0px 0px 5px",
            }}
          />
        </Box>

        {/* second.2 */}
        <Flex p={"1rem 0 1rem 1rem"} direction={"column"} justify={"center"} textAlign={"right"}>
          <Text>
            SAFAR wouldn't be what it is without a dedicated community of passionate travelers.
          </Text>

          <Text mt={"1rem"}> SAFAR is a better place because of your ideas, help & hard work.</Text>

          <Text mt={"1rem"}> Please help us, So we can make more better for you.</Text>

          <Box>
            <Link to={"https://donate.stripe.com/test_bIYdSgadeaqddTa000"}>
              <Button
                bg={"#f1095d"}
                mt={"1rem"}
                color={"#fff"}
                _hover={{
                  bg: "#fff",
                  border: "4px double #f1095d",
                  color: "#f1095d",
                }}
              >
                Donate
              </Button>
            </Link>
          </Box>
          <Image
            src={donate}
            alt={"Please donate..."}
            display={{
              base: "none",
              sm: "none",
              md: "none",
              lg: "block",
              xl: "block",
              "2xl": "block",
            }}
          />
        </Flex>
      </Flex>
    </Box>
  );
};
