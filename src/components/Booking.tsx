import { Box } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { useAppSelector } from "../redux/store";
import { useEffect, useState } from "react";
import { Places } from "../utils/types";
import { SinglePlace } from "./SinglePlace";

export const Booking = () => {
  const { id } = useParams();
  const data = useAppSelector((store) => store.placesReducer.data);

  const [bookingProduct, setBookingProduct] = useState<Places>({});

  useEffect(() => {
    const xBookingProduct: Places = data.find((el) => el.id === Number(id));
    setBookingProduct(xBookingProduct);
  }, []);

  return (
    <Box
      p={{
        base: "0rem 1rem",
        sm: "0rem 1rem",
        md: "0rem 2rem",
        lg: "0rem 5rem",
        xl: "0rem 5rem",
        "2xl": "0rem 5rem",
      }}
      minH={"100vh"}
    >
      <SinglePlace {...bookingProduct} />
    </Box>
  );
};
