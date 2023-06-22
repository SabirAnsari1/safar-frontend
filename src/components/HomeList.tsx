import { Box, Flex, Text, Grid, Center, Stack, Skeleton } from "@chakra-ui/react";
import { useEffect } from "react";
import { useAppSelector, useAppDispatch } from "../redux/store";
import { getHomePage } from "../redux/places/action";
import { HomeCard } from "./HomeCard";
import { shallowEqual } from "react-redux";

interface HomeListProp {
  str1: string;
  str2: string;
}

const skeleton: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

export const HomeList = ({ str1, str2 }: HomeListProp) => {
  const { home, isLoading } = useAppSelector(
    (store) => ({ home: store.placesReducer.home, isLoading: store.placesReducer.isLoading }),
    shallowEqual
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getHomePage());
  }, []);

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
            fontWeight={"hairline"}
            color={"#567eb9"}
          >
            {str2}
          </Text>
        </Flex>
      </Center>

      {/* second */}
      {isLoading ? (
        <Grid
          templateColumns={{
            base: "repeat(1,1fr)",
            sm: "repeat(2,1fr)",
            md: "repeat(3,1fr)",
            lg: "repeat(4,1fr)",
            xl: "repeat(4,1fr)",
            "2xl": "repeat(5,1fr)",
          }}
          gap={"1rem"}
        >
          {skeleton?.map((el) => (
            <Stack key={el}>
              <Skeleton height="200px" borderRadius={"5px"} />
              <Skeleton height="20px" borderRadius={"5px"} />
              <Skeleton height="20px" borderRadius={"5px"} />
            </Stack>
          ))}
        </Grid>
      ) : (
        <Grid
          templateColumns={{
            base: "repeat(1,1fr)",
            sm: "repeat(2,1fr)",
            md: "repeat(3,1fr)",
            lg: "repeat(4,1fr)",
            xl: "repeat(4,1fr)",
            "2xl": "repeat(5,1fr)",
          }}
          gap={"1rem"}
        >
          {home?.map((el) => (
            <HomeCard key={el.id} {...el} />
          ))}
        </Grid>
      )}
    </Box>
  );
};
