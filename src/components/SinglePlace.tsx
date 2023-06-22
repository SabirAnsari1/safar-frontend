import { useReducer } from "react";
import {
  Text,
  Image,
  useColorMode,
  Icon,
  Box,
  Flex,
  Button,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  FormControl,
  FormLabel,
  Input,
  ModalFooter,
  Center,
} from "@chakra-ui/react";
import { Places } from "../utils/types";
import { AiFillStar } from "react-icons/ai";
import { BsFillSuitHeartFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const initGuests = {
  checkin: "",
  checkout: "",
  adults: 0,
  children: 0,
  infants: 0,
  rooms: 0,
};

const guestsReducer = (state: any, { type, payload }: any) => {
  switch (type) {
    case "CHECK_IN": {
      return {
        ...state,
        checkin: payload,
      };
    }
    case "CHECK_OUT": {
      return {
        ...state,
        checkout: payload,
      };
    }
    case "ADULTS": {
      return {
        ...state,
        adults: payload,
      };
    }
    case "CHILDREN": {
      return {
        ...state,
        children: payload,
      };
    }
    case "INFANTS": {
      return {
        ...state,
        infants: payload,
      };
    }
    case "ROOMS": {
      return {
        ...state,
        rooms: payload,
      };
    }
    case "RESET": {
      return initGuests;
    }
    default: {
      return state;
    }
  }
};

export const SinglePlace = ({
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
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [state, dispatch] = useReducer(guestsReducer, initGuests);
  const { checkin, checkout, adults, children, infants, rooms } = state;

  const handleBookingPreview = () => {
    const bookingPreview = { ...state, city, country, type, price };

    localStorage.setItem("BookingPreview", JSON.stringify(bookingPreview));
    onClose();
    dispatch({ type: "RESET" });
  };

  return (
    <Box
      w={{
        base: "100%",
        sm: "100%",
        md: "80%",
        lg: "50%",
        xl: "50%",
        "2xl": "50%",
      }}
      margin={"auto"}
      borderRadius="5px"
      mt={"5%"}
    >
      {/* first */}
      <Box>
        {/* first */}
        <Image src={img} alt={city} w={"100%"} maxH={"500px"} borderRadius="5px" />

        {/* second */}
        <Box pos={"absolute"} top={"5%"} right={"7%"}>
          <Icon aria-label="favorite" as={BsFillSuitHeartFill} color={"#f1095d"} />
        </Box>

        {/* third */}
        <Flex justify={"space-between"} mt={".3rem"}>
          <Text fontWeight={"semibold"} color={colorMode === "light" ? "black" : "white"}>
            {city}, {country}
          </Text>

          <Box>
            <Icon aria-label="rating" as={AiFillStar} color={"#567eb9"} /> {rating}
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
        <Text>{type}</Text>

        {/* sixth */}
        <Text color={availability === "available" ? "#567eb9" : "#f1095d"}>
          {availability === "available" ? "Available" : "Not Available"}
        </Text>

        {/* seventh */}
        <Text>₹ {price}</Text>

        {/* eight */}
        <Button
          w={"100%"}
          bgColor={"#f1095d"}
          mt={".3rem"}
          color={"white"}
          onClick={onOpen}
          _hover={{
            bg: "#fff",
            border: "4px double #f1095d",
            color: "#f1095d",
          }}
        >
          Book Now
        </Button>
      </Box>

      {/* ==================================================================================== */}
      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent bgColor={colorMode === "light" ? "#fff" : "#000"}>
          <ModalHeader>
            <Center fontWeight={"bold"} fontSize={"2xl"}>
              Confirm Booking
            </Center>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel fontWeight={"bold"}>Check in date</FormLabel>
              <Input
                type="date"
                onChange={(e) => dispatch({ type: "CHECK_IN", payload: e.target.value })}
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel fontWeight={"bold"}>Check out date</FormLabel>
              <Input
                type="date"
                onChange={(e) => dispatch({ type: "CHECK_OUT", payload: e.target.value })}
              />
            </FormControl>

            <FormControl mt={4}>
              <Flex justify={"space-between"} align={"center"}>
                <Box>
                  <Box fontWeight={"bold"}>Adults</Box>
                  <Box>Ages 13 or above</Box>
                </Box>

                <Box>
                  <Button
                    isDisabled={adults === 0}
                    onClick={() => dispatch({ type: "ADULTS", payload: adults - 1 })}
                  >
                    -
                  </Button>
                  <Button isDisabled>{adults}</Button>
                  <Button onClick={() => dispatch({ type: "ADULTS", payload: adults + 1 })}>
                    +
                  </Button>
                </Box>
              </Flex>
            </FormControl>

            <FormControl mt={4}>
              <Flex justify={"space-between"} align={"center"}>
                <Box>
                  <Box fontWeight={"bold"}>Children</Box>
                  <Box>Ages 2–12</Box>
                </Box>

                <Box>
                  <Button
                    isDisabled={children === 0}
                    onClick={() => dispatch({ type: "CHILDREN", payload: children - 1 })}
                  >
                    -
                  </Button>
                  <Button isDisabled>{children}</Button>
                  <Button onClick={() => dispatch({ type: "CHILDREN", payload: children + 1 })}>
                    +
                  </Button>
                </Box>
              </Flex>
            </FormControl>

            <FormControl mt={4}>
              <Flex justify={"space-between"} align={"center"}>
                <Box>
                  <Box fontWeight={"bold"}>Infants</Box>
                  <Box>Under 2</Box>
                </Box>

                <Box>
                  <Button
                    isDisabled={infants === 0}
                    onClick={() => dispatch({ type: "INFANTS", payload: infants - 1 })}
                  >
                    -
                  </Button>
                  <Button isDisabled>{infants}</Button>
                  <Button onClick={() => dispatch({ type: "INFANTS", payload: infants + 1 })}>
                    +
                  </Button>
                </Box>
              </Flex>
            </FormControl>

            <FormControl mt={4}>
              <Flex justify={"space-between"} align={"center"}>
                <Box>
                  <Box fontWeight={"bold"}>Rooms</Box>
                  <Box>Booking rooms</Box>
                </Box>

                <Box>
                  <Button
                    isDisabled={rooms === 0}
                    onClick={() => dispatch({ type: "ROOMS", payload: rooms - 1 })}
                  >
                    -
                  </Button>
                  <Button isDisabled>{rooms}</Button>
                  <Button onClick={() => dispatch({ type: "ROOMS", payload: rooms + 1 })}>+</Button>
                </Box>
              </Flex>
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Box w={"100%"}>
              <Link to={`/bookingpreview`}>
                <Button
                  bgColor={"#f1095d"}
                  color={"white"}
                  w={"100%"}
                  _hover={{
                    bg: "#fff",
                    border: "4px double #f1095d",
                    color: "#f1095d",
                  }}
                  onClick={handleBookingPreview}
                >
                  Booking Preview
                </Button>
              </Link>
            </Box>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

// // Confirm Reservation

// import { Text, Image, useColorMode, Icon, Box, Flex, Button } from "@chakra-ui/react";
// import { Places } from "../utils/types";
// import { AiFillStar } from "react-icons/ai";
// import { BsFillSuitHeartFill } from "react-icons/bs";
// import { ConfirmBooking } from "./ConfirmBooking";

// export const SinglePlace = ({
//   id,
//   img,
//   city,
//   country,
//   type,
//   desc,
//   availability,
//   price,
//   review,
//   rating,
//   host,
//   hostImg,
//   yOh,
//   hostTag,
// }: Places) => {
//   const { colorMode } = useColorMode();
//   // const { isOpen, onOpen, onClose } = useDisclosure();

//   return (
//     <Box borderRadius="5px" w={"50%"} margin={"auto"} pos={"relative"} mt={"5%"}>
//       {/* first */}
//       <Image src={img} alt={city} w={"100%"} maxH={"500px"} borderRadius="5px" />

//       {/* second */}
//       <Box pos={"absolute"} top={"5%"} right={"7%"}>
//         <Icon aria-label="favorite" as={BsFillSuitHeartFill} color={"#f1095d"} />
//       </Box>

//       {/* third */}
//       <Flex justify={"space-between"} mt={".3rem"}>
//         <Text fontWeight={"semibold"} color={colorMode === "light" ? "black" : "white"}>
//           {city}, {country}
//         </Text>

//         <Box>
//           <Icon aria-label="rating" as={AiFillStar} color={"#567eb9"} /> {rating}
//         </Box>
//       </Flex>

//       {/* forth */}
//       <Text
//         color={"#788097"}
//         fontSize={{
//           base: "1xl",
//           sm: "1xl",
//           md: "1xl",
//           lg: "1xl",
//           xl: "1xl",
//           "2xl": "2xl",
//         }}
//       >
//         {desc}
//       </Text>

//       {/* fifth */}
//       <Text>{type}</Text>

//       {/* sixth */}
//       <Text color={availability === "available" ? "#567eb9" : "#f1095d"}>
//         {availability === "available" ? "Available" : "Not Available"}
//       </Text>

//       {/* seventh */}
//       <Text>₹ {price}</Text>

//       {/* eight */}
//       <Button
//         w={"100%"}
//         bgColor={"#f1095d"}
//         mt={".3rem"}
//         color={"white"}
//         onClick={() => ConfirmBooking}
//       >
//         Book Now
//       </Button>
//     </Box>
//   );
// };
