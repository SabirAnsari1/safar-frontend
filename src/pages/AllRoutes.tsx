import { Route, Routes } from "react-router-dom";
import { Home } from "./Home";
import { About } from "./About";
import { Support } from "./Support";
import { Housing } from "./Housing";
import { Community } from "./Community";
import { Login } from "./Login";
import { Places } from "./Places";
import { Booking } from "../components/Booking";
import { BookingPreview } from "../components/BookingPreview";
import { PageNotFound } from "./PageNotFound";

export const AllRoutes = () => {
  return (
    <Routes>
      <Route path={"/"} element={<Home />} />
      <Route path={"/about"} element={<About />} />
      <Route path={"/support"} element={<Support />} />
      <Route path={"/housing"} element={<Housing />} />
      <Route path={"/community"} element={<Community />} />
      <Route path={"/login"} element={<Login />} />
      <Route path={"/places"} element={<Places />} />
      <Route path={"/booking/:id"} element={<Booking />} />
      <Route path={"/bookingpreview"} element={<BookingPreview />} />
      <Route path={"*"} element={<PageNotFound />} />
    </Routes>
  );
};
