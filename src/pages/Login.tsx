import { useState } from "react";
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import bg1 from "../assets/images/imagbg1.png";
import { LoginData } from "../utils/types";
import { useAppDispatch } from "../redux/store";
import { userLogin } from "../redux/authentication/action";
import { useLocation, useNavigate } from "react-router-dom";

export const Login = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const handleClick = () => {
    if (email.length && password.length) {
      const payload: LoginData = {
        email,
        password,
      };

      dispatch(userLogin(payload)).then(() => {
        navigate(location.state?.data || "/", { replace: true });
      });
    }
  };

  return (
    <Flex minH={"100vh"} align={"center"} justify={"center"} boxShadow={"lg"}>
      <Flex>
        <Stack spacing={8} mx={"auto"} maxW={"lg"} minW="350px">
          <Stack align={"center"}>
            <Heading fontSize={"4xl"}>Welcome Back!</Heading>
            <Text fontSize={"lg"} color={"gray.600"}>
              Please Log In To Continue
            </Text>
          </Stack>
          <Box rounded={"lg"} bg={useColorModeValue("white", "gray.700")} p={8}>
            <Stack spacing={4}>
              <FormControl id="email">
                <FormLabel>Email address</FormLabel>
                <Input value={email} onChange={(e) => setEmail(e.target.value)} type="email" />
              </FormControl>
              <FormControl id="password">
                <FormLabel>Password</FormLabel>
                <Input
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                />
              </FormControl>
              <Stack spacing={10}>
                <Stack
                  direction={{ base: "column", sm: "row" }}
                  align={"start"}
                  justify={"space-between"}
                >
                  <Checkbox>Remember me</Checkbox>
                  <Link color={"blue.400"}>Forgot password?</Link>
                </Stack>
                <Button
                  onClick={handleClick}
                  bg={"blue.400"}
                  color={"white"}
                  _hover={{
                    bg: "blue.500",
                  }}
                >
                  Sign in
                </Button>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
      <Box bgImg={bg1} pt={"180px"}>
        <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6} w="350px">
          <Heading>Hello, There!</Heading>
          <Text align="center" fontSize="md" fontWeight="600" color="white">
            Don't have an account? Sign Up For Free
          </Text>
          <Button w="300px">Sign Up</Button>
        </Stack>
      </Box>
    </Flex>
  );
};
