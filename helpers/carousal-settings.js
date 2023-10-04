import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
  autoplay: true,
  autoplaySpeed: 5000,
  infinite: true,
  speed: 800,
  slidesPerRow: 4,
  rows: 2,
  slidesToScroll: 1,
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
  autoplay: true,
  autoplaySpeed: 5000,
  infinite: true,
  speed: 800,
  slidesToShow: 1,
  slidesToScroll: 1,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
  dots: true,
};
