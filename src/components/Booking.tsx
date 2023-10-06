import { Box } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { useAppSelector } from "../redux/store";
import { useEffect, useState } from "react";
import { Places } from "../utils/types";
import { SinglePlace } from "./SinglePlace";
import { Navbar } from "./Navbar";

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

    console.log(xBookingProduct);

    setBookingPlace(xBookingProduct);
  }, []);

  return (
    <Box>
      <Navbar />
      <Box
        minW={"100wh"}
        minH={"100vh"}
        p={{
          base: "100px 1rem 1rem 1rem",
          sm: "100px 1rem 1rem 1rem",
          md: "100px 2rem 2rem 2rem",
          lg: "100px 5rem 2rem 5rem",
          xl: "100px 5rem 2rem 5rem",
          "2xl": "100px 5rem 2rem 5rem",
        }}
      >
        <SinglePlace {...bookingPlace} />
      </Box>
    </Box>
  );
};
