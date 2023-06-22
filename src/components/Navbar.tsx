import { Link } from "react-router-dom";
import {
  Flex,
  Box,
  Image,
  IconButton,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerBody,
  useColorMode,
  useDisclosure,
  Text,
} from "@chakra-ui/react";
import logoDark from "../assets/images/logoDark.png";
import logoLight from "../assets/images/logoLight.png";
import { FaSun, FaMoon } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { BsFillSuitHeartFill } from "react-icons/bs";
import { FaUser, FaUserSlash } from "react-icons/fa";
import { useAppSelector } from "../redux/store";

export const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const isAuth = useAppSelector((store) => store.authReducer.isAuth);

  return (
    <Flex
      minW={"100%"}
      maxW={"100%"}
      minH={"80px"}
      maxH={"80px"}
      align={"center"}
      justify={"space-between"}
      pos={"sticky"}
      top={"0"}
      zIndex={"1"}
      bg={colorMode === "light" ? "#fff" : "#000"}
      p={{
        base: "0rem 1rem",
        sm: "0rem 1rem",
        md: "0rem 2rem",
        lg: "0rem 5rem",
        xl: "0rem 5rem",
        "2xl": "0rem 5rem",
      }}
    >
      {/* first */}
      <Box
        display={{
          base: "block",
          sm: "block",
          md: "none",
          lg: "none",
          xl: "none",
          "2xl": "none",
        }}
      >
        <IconButton
          aria-label={"hamburger"}
          icon={<GiHamburgerMenu />}
          size={"sm"}
          onClick={onOpen}
        />

        <Drawer placement={"top"} onClose={onClose} isOpen={isOpen}>
          <DrawerOverlay />
          <DrawerContent>
            <DrawerBody
              p={{
                base: "1rem 1rem",
                sm: "1rem 1rem",
                md: "2rem 2rem",
                lg: "2rem 5rem",
                xl: "2rem 5rem",
                "2xl": "2rem 5rem",
              }}
              bg={colorMode === "light" ? "white" : "black"}
            >
              <Link to={"/places"} onClick={onClose}>
                <Text>Places</Text>
              </Link>

              <Link to={"/about"} onClick={onClose}>
                <Text>About</Text>
              </Link>

              <Link to={"/support"} onClick={onClose}>
                <Text>Support</Text>
              </Link>

              <Link to={"/housing"} onClick={onClose}>
                <Text>Housing</Text>
              </Link>

              <Link to={"/community"} onClick={onClose}>
                <Text>Community</Text>
              </Link>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </Box>

      {/* second */}
      <Box
        w={{
          base: "15%",
          sm: "10%",
          md: "8%",
          lg: "8%",
          xl: "7%",
          "2xl": "7%",
        }}
      >
        <Link to={"/"}>
          <Image src={colorMode === "light" ? logoLight : logoDark} alt={"Logo"} w={"100%"} />
        </Link>
      </Box>

      {/* third */}
      <Flex
        w={"50%"}
        justify={"space-between"}
        fontSize={"2xl"}
        gap={".5rem"}
        display={{
          base: "none",
          sm: "none",
          md: "flex",
          lg: "flex",
          xl: "flex",
          "2xl": "flex",
        }}
      >
        <Link to={"/places"}>
          <Text
            _hover={{
              color: "#f1095d",
            }}
          >
            Places
          </Text>
        </Link>

        <Link to={"/about"}>
          <Text
            _hover={{
              color: "#f1095d",
            }}
          >
            About
          </Text>
        </Link>

        <Link to={"/support"}>
          <Text
            _hover={{
              color: "#f1095d",
            }}
          >
            Support
          </Text>
        </Link>

        <Link to={"/housing"}>
          <Text
            _hover={{
              color: "#f1095d",
            }}
          >
            Housing
          </Text>
        </Link>

        <Link to={"/community"}>
          <Text
            _hover={{
              color: "#f1095d",
            }}
          >
            Community
          </Text>
        </Link>
      </Flex>

      {/* forth */}
      <Flex>
        {/* forth.1 */}
        <Box>
          <IconButton
            aria-label={"favorite"}
            icon={<BsFillSuitHeartFill />}
            color={"#f1095d"}
            size={"sm"}
            isRound
          />
        </Box>

        {/* forth.2 */}
        <Box>
          <Link to={"/login"}>
            <IconButton
              aria-label={"auth"}
              icon={isAuth ? <FaUserSlash /> : <FaUser />}
              size={"sm"}
              isRound
            />
          </Link>
        </Box>

        {/* forth.3 */}
        <Box>
          <IconButton
            aria-label={"theme"}
            icon={colorMode === "light" ? <FaMoon /> : <FaSun />}
            isRound
            size={"sm"}
            onClick={toggleColorMode}
          />
        </Box>
      </Flex>
    </Flex>
  );
};
