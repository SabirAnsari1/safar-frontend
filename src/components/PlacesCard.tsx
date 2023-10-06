import { useEffect } from "react";
import {
  Text,
  Grid,
  Image,
  useColorMode,
  Icon,
  Box,
  Flex,
  Button,
  useToast,
} from "@chakra-ui/react";
import { Places } from "../utils/types";
import { AiFillStar } from "react-icons/ai";
import { BsFillSuitHeartFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../redux/store";
import { addFavoritePlace, favoriteResetFunc } from "../redux/favorites/action";
import { shallowEqual } from "react-redux";

export const PlacesCard = ({
  _id,
  img,
  city,
  country,
  desc,
  type,
  availability,
  review,
  price,
  rating,
}: Places) => {
  const { colorMode } = useColorMode();
  const dispatch = useAppDispatch();
  const { isLoading, isError, errMessage, isfavorite } = useAppSelector(
    (store) => ({
      isLoading: store.favoriteReducer.isLoading,
      isError: store.favoriteReducer.isError,
      errMessage: store.favoriteReducer.errMessage,
      isfavorite: store.favoriteReducer.isfavorite,
    }),
    shallowEqual
  );
  const toast = useToast();

  const handleAddFavorite = (_id: string) => {
    dispatch(addFavoritePlace(_id));
  };

  // useEffect(() => {
  //   {
  //     isLoading
  //       ? toast({
  //           title: `Loading...`,
  //           status: "loading",
  //           isClosable: true,
  //           position: "top",
  //           duration: 500,
  //         })
  //       : isError
  //       ? toast({
  //           title: `${errMessage}`,
  //           status: "error",
  //           isClosable: true,
  //           position: "top",
  //           duration: 1000,
  //         })
  //       : isfavorite
  //       ? toast({
  //           title: `Favorite Place Added Successfully`,
  //           status: "success",
  //           isClosable: true,
  //           position: "top",
  //           duration: 1000,
  //         })
  //       : "";
  //   }
  // }, [isLoading, isError, isfavorite]);

  useEffect(() => {
    isfavorite && dispatch(favoriteResetFunc);
  }, [isfavorite]);

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
        {isfavorite ? (
          <Button bg={"none"} _hover={{ bg: "none" }}>
            <Icon
              aria-label="favorite"
              as={BsFillSuitHeartFill}
              color={"#dc2e6d"}
            />
          </Button>
        ) : (
          <Button
            onClick={() => handleAddFavorite(_id)}
            background={"none"}
            _hover={{ bg: "none" }}
          >
            <Icon
              aria-label="favorite"
              as={BsFillSuitHeartFill}
              color={"white"}
            />
          </Button>
        )}
      </Box>

      {/* third */}
      <Flex justify={"space-between"} mt={".3rem"}>
        <Text
          fontWeight={"semibold"}
          color={colorMode === "light" ? "black" : "white"}
        >
          {city}, {country}
        </Text>

        <Box>
          <Icon aria-label="rating" as={AiFillStar} color={"#567eb9"} />{" "}
          {rating}
        </Box>
      </Flex>

      {/* forth */}
      <Text
        color={"#788097"}
        fontSize={{
          base: "1xl",
          sm: "1xl",
          md: "1xl",
          lg: "1xl",
          xl: "1xl",
          "2xl": "2xl",
        }}
      >
        {desc}
      </Text>

      {/* fifth */}
      <Text color={availability === "available" ? "#567eb9" : "#f1095d"}>
        {availability === "available" ? "Available" : "Not Available"}
      </Text>

      {/* sixth */}
      <Text>₹ {price}</Text>

      {/* seventh */}
      <Link to={`/booking/${_id}`}>
        <Button
          w={"100%"}
          bgColor={"#f1095d"}
          mt={".3rem"}
          color={"white"}
          isDisabled={availability === "unavailable"}
          _hover={{
            bg: availability === "unavailable" ? "null" : "white",
            color: availability === "unavailable" ? "null" : "#f1095d",
            border:
              availability === "unavailable" ? "null" : "4px double #f1095d",
          }}
        >
          Book Now
        </Button>
      </Link>
    </Grid>
  );
};
