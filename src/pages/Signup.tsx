import React, { useState, useEffect } from "react";
import {
  Box,
  Button,
  Center,
  Flex,
  IconButton,
  Img,
  Input,
  InputGroup,
  InputRightElement,
  Text,
  VStack,
  FormControl,
  FormHelperText,
  useToast,
} from "@chakra-ui/react";
import facebook from "../assets/images/facebook.png";
import google from "../assets/images/google.png";
import { FaRegEyeSlash, FaRegEye } from "react-icons/fa";
import { useAppDispatch, useAppSelector } from "../redux/store";
import { signup, userRegisterResetFunc } from "../redux/authentication/action";
import { Link, Navigate } from "react-router-dom";
import { shallowEqual } from "react-redux";

export const Signup = () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);
  const dispatch = useAppDispatch();
  const toast = useToast();
  const { isLoading, isError, errMessage, isRegistered } = useAppSelector(
    (store) => ({
      isLoading: store.authReducer.isLoading,
      isError: store.authReducer.isError,
      errMessage: store.authReducer.errMessage,
      isRegistered: store.authReducer.isRegistered,
    }),
    shallowEqual
  );

  const handleRegister = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const registerUser = {
      firstname,
      lastname,
      phone,
      email,
      password,
    };

    dispatch(signup(registerUser));
  };

  useEffect(() => {
    {
      isLoading
        ? toast({
            title: `Loading...`,
            status: "loading",
            isClosable: true,
            position: "top",
            duration: 500,
          })
        : isError
        ? toast({
            title: `${errMessage}`,
            status: "error",
            isClosable: true,
            position: "top",
            duration: 2000,
          })
        : isRegistered
        ? toast({
            title: `New User Registered Successfully`,
            status: "success",
            isClosable: true,
            position: "top",
            duration: 1000,
          })
        : "";
    }
  }, [isLoading, isError, isRegistered]);

  useEffect(() => {
    dispatch(userRegisterResetFunc);
    setFirstname("");
    setLastname("");
    setPhone("");
    setEmail("");
    setPassword("");
  }, [isRegistered]);

  return (
    <Flex minW={"100wh"} minH={"100vh"} justify={"center"} align={"center"}>
      <Flex w={"80%"} h={"80%"} justify={"center"} align={"center"}>
        {isRegistered && <Navigate to="/login" replace />}
        <Box w={"50%"} p={"1rem"}>
          <form onSubmit={handleRegister}>
            <FormControl>
              <VStack spacing={"1rem"}>
                <Flex w={"100%"} gap={"1rem"}>
                  <Button w={"50%"}>
                    <Link to={"/login"}>Login</Link>
                  </Button>
                  <Button
                    w={"50%"}
                    bgColor={"#f1095d"}
                    color={"white"}
                    _hover={{
                      bg: "null",
                    }}
                  >
                    Register
                  </Button>
                </Flex>

                <Input
                  type="text"
                  placeholder="First Name"
                  variant={"filled"}
                  borderRadius={"5px 5px 0px 0px"}
                  isRequired
                  value={firstname}
                  onChange={(e) => setFirstname(e.target.value)}
                />
                <Input
                  type="text"
                  placeholder="Last Name"
                  variant={"filled"}
                  borderRadius={"0px"}
                  isRequired
                  value={lastname}
                  onChange={(e) => setLastname(e.target.value)}
                />
                <Input
                  type="number"
                  placeholder="Phone Number"
                  variant={"filled"}
                  borderRadius={"0px"}
                  isRequired
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
                <Input
                  type="email"
                  placeholder="Email"
                  variant={"filled"}
                  borderRadius={"0px"}
                  isRequired
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <InputGroup>
                  <Input
                    type={show ? "text" : "password"}
                    placeholder="Password"
                    borderRadius={"0px"}
                    variant="filled"
                    isRequired
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <InputRightElement>
                    <Box onClick={() => setShow((prev) => !prev)}>
                      {show ? (
                        <IconButton
                          aria-label={"hide"}
                          icon={<FaRegEyeSlash />}
                        />
                      ) : (
                        <IconButton aria-label={"show"} icon={<FaRegEye />} />
                      )}
                    </Box>
                  </InputRightElement>
                </InputGroup>

                <Button
                  w={"100%"}
                  bgColor={"#f1095d"}
                  color={"white"}
                  borderRadius={"0px 0px 5px 5px"}
                  _hover={{
                    bg: "null",
                  }}
                  type="submit"
                >
                  Signup
                </Button>
                <Center>
                  <Text>
                    Already have account? <Link to={"/login"}>Login</Link>
                  </Text>
                </Center>
                <Center>
                  <FormHelperText>Or</FormHelperText>
                </Center>

                <Button gap={".5rem"} p={"1.7rem"}>
                  <Img src={facebook} w={"10%"} />
                  <p>Signin with Facebook</p>
                </Button>

                <Button gap={".5rem"} p={"1.7rem"}>
                  <Img src={google} w={"10%"} />
                  <Text>Signin with Google</Text>
                </Button>
              </VStack>
            </FormControl>
          </form>
        </Box>
      </Flex>
    </Flex>
  );
};
