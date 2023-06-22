import "./App.css";
import { Navbar } from "./components/Navbar";
import { AllRoutes } from "./pages/AllRoutes";
import { Box, useColorModeValue } from "@chakra-ui/react";

function App() {
  const bgColor = useColorModeValue("white", "black");
  const color = useColorModeValue("black", "white");

  return (
    <Box bgColor={bgColor} color={color}>
      <Navbar />
      <AllRoutes />
    </Box>
  );
}

export default App;
