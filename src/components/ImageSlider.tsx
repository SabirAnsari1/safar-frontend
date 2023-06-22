import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import one from "../assets/images/1.jpg";
import two from "../assets/images/2.jpg";
import three from "../assets/images/3.jpg";
import four from "../assets/images/4.jpg";
import five from "../assets/images/5.jpg";
import six from "../assets/images/6.jpg";
import seven from "../assets/images/7.jpg";
import eight from "../assets/images/8.jpg";
import nine from "../assets/images/9.jpg";
import ten from "../assets/images/10.jpg";

import { Center, Box, Image, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const sliderImages = [
  { img: one, quote: "Adventure is out there" },
  { img: two, quote: "Live your life by a compass, not a clock" },
  { img: three, quote: "Life begins at the end of your comfort zone" },
  { img: four, quote: "A journey of a thousand miles begins with a single step" },
  { img: five, quote: "To travel is to live" },
  {
    img: six,
    quote: "Jobs fill your pocket. adventures fill your soul",
  },
  { img: seven, quote: "Fill your life with experiences, not things" },
  {
    img: eight,
    quote: " Human cannot discover new oceans unless he has the courage to lose sight of the shore",
  },
  { img: nine, quote: "Love is the food of life, travel is dessert" },
  { img: ten, quote: "Not all classrooms have 4 walls" },
];

export const ImageSlider = () => {
  const settings = {
    dots: true,
    fade: true,
    speed: 1000,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: true,
    cssEase: "linear",
    arrows: false,
  };

  return (
    <Center
      p={{
        base: "1rem 1rem",
        sm: "1rem 1rem",
        md: "1rem 2rem",
        lg: "2rem 5rem",
        xl: "2rem 5rem",
        "2xl": "3rem 5rem",
      }}
    >
      <Box
        w={{
          base: "100%",
          sm: "100%",
          md: "80%",
          lg: "80%",
          xl: "80%",
          "2xl": "80%",
        }}
        borderRadius={"10px"}
      >
        <Slider {...settings}>
          {sliderImages?.map(({ img, quote }, index) => (
            <Box pos={"relative"} key={index}>
              <Box>
                <Image src={img} alt={`${index + 1}`} borderRadius={"10px"} w={"100%"} />
              </Box>

              <Box
                w={"30%"}
                pos={"absolute"}
                bg={"#567eb9"}
                opacity={".6"}
                borderRadius={"0px 5px 5px 0px"}
                textAlign={"center"}
                top={"20px"}
                p={".2rem"}
                color={"white"}
                boxShadow={
                  "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px"
                }
                display={{
                  base: "none",
                  sm: "none",
                  md: "flex",
                  lg: "flex",
                  xl: "flex",
                  "2xl": "flex",
                }}
              >
                {quote}
              </Box>

              <Link to={"/places"}>
                <Button
                  bgColor={"#f1095d"}
                  mt={".5rem"}
                  pos={"absolute"}
                  bottom={"20px"}
                  right={"20px"}
                  opacity={".6"}
                  color={"white"}
                  size={{
                    base: "xs",
                    sm: "sm",
                    md: "sm",
                    lg: "md",
                    xl: "md",
                    "2xl": "md",
                  }}
                  _hover={{
                    bg: "#fff",
                    border: "4px double #f1095d",
                    color: "#f1095d",
                  }}
                >
                  See More
                </Button>
              </Link>
            </Box>
          ))}
        </Slider>
      </Box>
    </Center>
  );
};
