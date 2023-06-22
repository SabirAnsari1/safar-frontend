import { useReducer } from "react";
import {
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

const initGuests = {
  checkin: "",
  checkout: "",
  adults: 0,
  children: 0,
  infants: 0,
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
    case "RESET": {
      return initGuests;
    }
    default: {
      return state;
    }
  }
};

export const ConfirmBooking = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [state, dispatch] = useReducer(guestsReducer, initGuests);
  const { checkin, checkout, adults, children, infants } = state;

  return (
    <Box>
      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent>
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
          </ModalBody>

          <ModalFooter>
            <Button
              bgColor={"#f1095d"}
              color={"white"}
              w={"100%"}
              onClick={() => {
                dispatch({ type: "RESET" });
                onClose();
              }}
            >
              Booking Preview
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};
