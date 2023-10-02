import { useAppSelector } from "../redux/store";
import { Box, Grid, Heading, Center } from "@chakra-ui/react";
import { FavoritesPlaces } from "../components/FavoritesPlaces";
import { Places } from "../utils/types";

export const Favorites = () => {
  const favorites = useAppSelector((store) => store.favoriteReducer.favorites);

  return (
    <Box
      minH={"100vh"}
      p={{
        base: "1rem 1rem",
        sm: "1rem 1rem",
        md: "2rem 2rem",
        lg: "2rem 5rem",
        xl: "2rem 5rem",
        "2xl": "2rem 5rem",
      }}
    >
      {favorites.length === 0 ? (
        <Center>
          <Heading>Favourite is empty.</Heading>
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
            <FavoritesPlaces key={el.id} {...el} />
          ))}
        </Grid>
      )}
    </Box>
  );
};
