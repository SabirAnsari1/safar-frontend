import React, { useState, useEffect } from "react";
import {
  Box,
  Button,
  Center,
  Flex,
  Heading,
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
import { useAppDispatch, useAppSelector } from "../redux/store";
import { FaRegEyeSlash, FaRegEye } from "react-icons/fa";
import facebook from "../assets/images/facebook.png";
import google from "../assets/images/google.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { login } from "../redux/authentication/action";
import { shallowEqual } from "react-redux";
import { Navbar } from "../components/Navbar";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);
  const dispatch = useAppDispatch();
  const toast = useToast();
  const { isLoading, isError, errMessage, isAuth, isLogout } = useAppSelector(
    (store) => ({
      isLoading: store.authReducer.isLoading,
      isError: store.authReducer.isError,
      errMessage: store.authReducer.errMessage,
      isAuth: store.authReducer.isAuth,
      isLogout: store.authReducer.isLogout,
    }),
    shallowEqual
  );
  const loction = useLocation();
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const loginUser = {
      email,
      password,
    };

    dispatch(login(loginUser));
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
        : isAuth
        ? toast({
            title: `Login Successfull`,
            status: "success",
            isClosable: true,
            position: "top",
            duration: 1000,
          })
        : isLogout
        ? toast({
            title: `Logout Successfull`,
            status: "info",
            isClosable: true,
            position: "top",
            duration: 1000,
          })
        : "";
    }
  }, [isLoading, isError, isAuth, isLogout]);

  useEffect(() => {
    isAuth && navigate(loction.state, { replace: true });
    setEmail("");
    setPassword("");
  }, [isAuth]);

  useEffect(() => {
    localStorage.removeItem("token");
  }, [isLogout]);

  return (
    <Box>
      <Navbar />

      <Flex minW={"100wh"} minH={"100vh"} justify={"center"} align={"center"}>
        <Flex w={"80%"} h={"80%"} justify={"center"} align={"center"}>
          <Box
            w={{
              base: "100%",
              sm: "100%",
              md: "70%",
              lg: "50%",
              xl: "50%",
              "2xl": "50%",
            }}
            p={"1rem"}
          >
            {/* <FormControl> */}
            <form onSubmit={handleLogin}>
              <FormControl>
                <VStack spacing={"1rem"}>
                  <Flex w={"100%"} gap={"1rem"}>
                    <Button
                      w={"50%"}
                      bgColor={"#f1095d"}
                      color={"white"}
                      _hover={{
                        bg: "null",
                      }}
                    >
                      Login
                    </Button>

                    <Button onClick={() => navigate("/signup")} w={"50%"}>
                      Register
                    </Button>
                  </Flex>

                  <Input
                    type="email"
                    placeholder="Email"
                    variant={"filled"}
                    borderRadius={"5px 5px 0px 0px"}
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
                    Login
                  </Button>
                  <Center>
                    <Text>
                      Don't have account? <Link to="/signup">Signup</Link>
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
    </Box>
  );
};
