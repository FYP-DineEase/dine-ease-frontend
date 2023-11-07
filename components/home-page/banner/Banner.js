import React, { useEffect, useState } from "react";

import { Box, Button, Container } from "@mui/material";

import {
  BannerContainer,
  BannerTextContainer,
  StyledImage,
} from "./Banner.styles";

import LocalDiningIcon from "@mui/icons-material/LocalDining";

import bannerImage1 from "@/public/assets/images/banner1.jpg";
import bannerImage2 from "@/public/assets/images/banner2.jpg";
import bannerImage3 from "@/public/assets/images/banner3.jpg";
import bannerImage4 from "@/public/assets/images/banner4.jpg";

import { Text } from "@/components/UI";

const Banner = () => {
  const banner = [
    {
      text: "Discover, Dine, Decide – With DineEase, Your City's Culinary Compass.",
      bannerImage: bannerImage1,
    },
    {
      text: "Discover, Dine, Decide – With DineEase, Your City's Culinary Compass.",
      bannerImage: bannerImage2,
    },
    {
      text: "Discover, Dine, Decide – With DineEase, Your City's Culinary Compass.",
      bannerImage: bannerImage3,
    },
    {
      text: "Discover, Dine, Decide – With DineEase, Your City's Culinary Compass.",
      bannerImage: bannerImage4,
    },
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
            <Text variant="header">DineEase</Text>
          </Box>
          <Box textAlign="center">
            <Text variant="subHeader">{banner[currentImage].text}</Text>
          </Box>
          <Button
            variant="outlined"
            color="inherit"
            sx={{ marginTop: "1.5rem" }}
          >
            <Text variant="body">Explore Restaurants</Text>
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
                    backgroundColor: "darkorange",
                    borderRadius: "10px",
                    height: "100%",
                    transition: "all 5s linear",
                    width: `${progress[index]}%`,
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
