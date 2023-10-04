import { Box, Button, Container } from "@mui/material";
import bannerImage1 from "@/assets/banner1.jpg";
import bannerImage2 from "@/assets/banner2.jpg";
import bannerImage3 from "@/assets/banner3.jpg";
import bannerImage4 from "@/assets/banner4.jpg";
import React, { useEffect, useState } from "react";
import {
  BannerContainer,
  BannerTextContainer,
  StyledImage,
} from "./Banner.styles";
import { ResponsiveText } from "@/styles/common-styles/CommonStyles.styles";
import LocalDiningIcon from "@mui/icons-material/LocalDining";

const Banner = () => {
  const banner = [
    { text: "Explore The Sea Of Restaurants 1", bannerImage: bannerImage1 },
    { text: "Explore The Sea Of Restaurants 2", bannerImage: bannerImage2 },
    { text: "Explore The Sea Of Restaurants 3", bannerImage: bannerImage3 },
    // { text: "Explore The Sea Of Restaurants 4", bannerImage: bannerImage4 },
  ];

  const [currentImage, setCurrentImage] = useState(0);
  const [progress, setProgress] = useState(new Array(banner.length).fill(0));

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (currentImage === banner.length - 1) {
        setCurrentImage(0);
        setProgress(new Array(banner.length).fill(0));
      } else {
        setCurrentImage((prev) => prev + 1);
      }
    }, 5000);
    setProgress((prevProgress) => {
      const newProgress = [...prevProgress];
      newProgress[currentImage] = 100; // Set the current image's progress to 100%
      return newProgress;
    });

    return () => clearTimeout(timeout);
  }, [currentImage]);

  return (
    <Container maxWidth={false} disableGutters>
      <BannerContainer>
        <StyledImage
          fill
          sizes="100vw"
          alt={banner[currentImage].text}
          src={banner[currentImage].bannerImage}
          key={currentImage}
        />
        <BannerTextContainer>
          <Box textAlign="center">
            <LocalDiningIcon sx={{ color: "darkorange", fontSize: "100px" }} />
          </Box>
          <Box sx={{ textAlign: "center", fontWeight: "bold" }}>
            <ResponsiveText variant="header">
              {banner[currentImage].text}
            </ResponsiveText>
          </Box>
          <Box textAlign="center">
            <ResponsiveText variant="subHeader">Halo</ResponsiveText>
          </Box>
          <Button
            variant="outlined"
            color="inherit"
            sx={{ marginTop: "1.5rem" }}
          >
            <ResponsiveText variant="body">Explore Restaurants</ResponsiveText>
          </Button>
          <Box
            sx={{
              marginTop: "1rem",
              display: "flex",
              gap: "0.5rem",
            }}
          >
            {banner.map((banner, index) => (
              <Box
                key={index}
                sx={{
                  width: "60px",
                  borderRadius: "10px",
                  height: "8px",
                  backgroundColor: "white",
                }}
              >
                <Box
                  sx={{
                    width: `${progress[index]}%`,
                    backgroundColor: "darkorange",
                    borderRadius: "10px",
                    height: "100%",
                    transition: "5s all linear",
                  }}
                />
              </Box>
            ))}
          </Box>
        </BannerTextContainer>
      </BannerContainer>
    </Container>
  );
};

export default Banner;
