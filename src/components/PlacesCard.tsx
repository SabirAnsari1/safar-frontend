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
import { getFavdata, postSingleProductItem } from "../redux/favorites/action";
import { useState } from "react";

export const PlacesCard = ({
  id,
  img,
  city,
  country,
  type,
  desc,
  availability,
  price,
  review,
  rating,
  host,
  hostImg,
  yOh,
  hostTag,
}: Places) => {
  const { colorMode } = useColorMode();

  const dispatch = useAppDispatch();
  const toast = useToast();
  const places = useAppSelector((store) => store.placesReducer.data);
  const [state, setState] = useState<boolean>(false);

  const handleAdd = () => {
    let d = places.find((el) => el.id === id);
    // console.log(d);
    dispatch(postSingleProductItem({ ...d, quantity: 1 })).then((res: any) => {
      dispatch(getFavdata());
      toast({
        // title: "Yay!!",
        description: "The place has been added to favourites",
        status: "success",
        duration: 4000,
        position: "top",
        isClosable: true,
      });
      setState(true);
    });
  };
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
        {!state ? (
          <Button
            onClick={handleAdd}
            background={"none"}
            _hover={{ bg: "none" }}
          >
            <Icon
              aria-label="favorite"
              as={BsFillSuitHeartFill}
              color={"white"}
            />
          </Button>
        ) : (
          <Button bg={"none"} _hover={{ bg: "none" }}>
            <Icon
              aria-label="favorite"
              as={BsFillSuitHeartFill}
              color={"#dc2e6d"}
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
      {/* {availability === "unavailable" ? (
        <Button
          w={"100%"}
          bgColor={"#f1095d"}
          mt={".3rem"}
          color={"white"}
          isDisabled={availability === "unavailable"}
          _hover={{
            bg: "null",
          }}
        >
          Book Now
        </Button>
      ) : ( */}
      <Link to={`/booking/${id}`}>
        <Button
          w={"100%"}
          bgColor={"#f1095d"}
          mt={".3rem"}
          color={"white"}
          isDisabled={availability === "unavailable"}
          _hover={{
            bg: "null",
          }}
        >
          Book Now
        </Button>
      </Link>
      {/* )} */}
    </Grid>
  );
};
