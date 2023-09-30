import { Route, Routes } from "react-router-dom";
import { Home } from "./Home";
import { About } from "./About";
import { Support } from "./Support";
import { Housing } from "./Housing";
import { Community } from "./Community";
import { Places } from "./Places";
import { Booking } from "../components/Booking";
import { BookingPreview } from "../components/BookingPreview";
import { PageNotFound } from "./PageNotFound";
import { Signup } from "./Signup";
import { Login } from "./Login";
import { Favorites } from "./Favorites";
import { PrivateRoute } from "../components/PrivateRoute";

export const AllRoutes = () => {
  return (
    <Routes>
      <Route path={"/"} element={<Home />} />
      <Route path={"/about"} element={<About />} />
      <Route path={"/support"} element={<Support />} />
      <Route path={"/housing"} element={<Housing />} />
      <Route path={"/community"} element={<Community />} />
      <Route path={"/login"} element={<Login />} />
      <Route path={"/signup"} element={<Signup />} />
      <Route
        path={"/favorites"}
        element={
          <PrivateRoute>
            <Favorites />
          </PrivateRoute>
        }
      />
      <Route path={"/places"} element={<Places />} />
      <Route
        path={"/booking/:id"}
        element={
          <PrivateRoute>
            <Booking />
          </PrivateRoute>
        }
      />
      <Route path={"/bookingpreview"} element={<BookingPreview />} />
      <Route path={"*"} element={<PageNotFound />} />
    </Routes>
  );
};
