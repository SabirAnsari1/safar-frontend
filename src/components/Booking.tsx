import { Box } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { useAppSelector } from "../redux/store";
import { useEffect, useState } from "react";
import { Places } from "../utils/types";
import { SinglePlace } from "./SinglePlace";

let xxx = {
  id: 0,
  img: "",
  city: "",
  country: "",
  type: "",
  desc: "",
  availability: "",
  price: 0,
  review: "",
  rating: "",
  host: "",
  hostImg: "",
  yOh: "",
  hostTag: "",
};

export const Booking = () => {
  const { id } = useParams();
  const place = useAppSelector((store) => store.placesReducer.places);

  const [bookingPlace, setBookingPlace] = useState<Places>(xxx);

  useEffect(() => {
    const xBookingProduct: Places = place?.find((el) => el.id === Number(id));
    setBookingPlace(xBookingProduct);
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
      <SinglePlace {...bookingPlace} />
    </Box>
  );
};
