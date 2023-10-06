import { useEffect } from "react";
import { useAppSelector, useAppDispatch } from "../redux/store";
import { Box, Grid, Heading, Center } from "@chakra-ui/react";
import { FavoritesPlacesCard } from "../components/FavoritesPlacesCard";
import { Places } from "../utils/types";
import { getFavoritesPlaces } from "../redux/favorites/action";
import { Navbar } from "../components/Navbar";

export const Favorites = () => {
  const dispatch = useAppDispatch();
  const favorites = useAppSelector((store) => store.favoriteReducer.favorites);

  useEffect(() => {
    dispatch(getFavoritesPlaces);
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
        {favorites.length === 0 ? (
          <Center>
            <Heading>Favourite is empty...</Heading>
          </Center>
        ) : (
          <Grid
            templateColumns={{
              base: "repeat(1,1fr)",
              sm: "repeat(2,1fr)",
              md: "repeat(3,1fr)",
              lg: "repeat(4,1fr)",
              xl: "repeat(4,1fr)",
              "2xl": "repeat(5,1fr)",
            }}
            gap={"1rem"}
          >
            {favorites?.map((el: Places) => (
              <FavoritesPlacesCard key={el._id} {...el} />
            ))}
          </Grid>
        )}
      </Box>
    </Box>
  );
};
