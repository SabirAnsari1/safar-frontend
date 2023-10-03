import { Box } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { useAppSelector } from "../redux/store";
import { useEffect, useState } from "react";
import { Places } from "../utils/types";
import { SinglePlace } from "./SinglePlace";

let xxx = {
  _id: "",
  img: "",
  city: "",
  country: "",
  type: "",
  desc: "",
  availability: "",
  price: 0,
  review: "",
  rating: "",
};

export const Booking = () => {
  const { _id } = useParams();
  const places = useAppSelector((store) => store.placesReducer.places);
  const [bookingPlace, setBookingPlace] = useState<Places>(xxx);

  useEffect(() => {
    const xBookingProduct: Places = places?.find((el) => el._id === _id);
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
