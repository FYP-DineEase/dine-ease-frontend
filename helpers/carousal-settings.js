import { Box, IconButton } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

const NextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <ArrowForwardIosIcon
      className={className}
      sx={{ right: "-30px !important", color: "black !important" }}
      onClick={onClick}
    />
  );
};

const PrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <ArrowBackIosIcon
      className={className}
      sx={{ left: "-30px !important", color: "black !important" }}
      onClick={onClick}
    />
  );
};

export const featuredSettings = {
  // autoplay: true,
  // autoplaySpeed: 5000, // Time in milliseconds between slides
  infinite: true, // Loop through the slides infinitely
  speed: 500, // Transition speed in milliseconds
  slidesPerRow: 4,
  // adaptiveHeight: true,
  rows: 2,
  slidesToScroll: 1, // Number of slides to scroll at once
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
  dots: true,

  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesPerRow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 900,
      settings: {
        slidesPerRow: 1,
        slidesToShow: 1,
      },
    },
  ],
};

export const activitySettings = {
  // autoplay: true,
  // autoplaySpeed: 5000, // Time in milliseconds between slides
  infinite: true, // Loop through the slides infinitely
  speed: 500, // Transition speed in milliseconds
  slidesToShow: 1, // Number of slides to show at once
  slidesToScroll: 1, // Number of slides to scroll at once
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
  dots: true,
};
