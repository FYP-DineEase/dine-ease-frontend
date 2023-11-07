import React from "react";

import Image from "next/image";

import { Container, Grid } from "@mui/material";

import bannerImage1 from "@/public/assets/images/banner1.jpg";
import bannerImage2 from "@/public/assets/images/banner2.jpg";
import bannerImage3 from "@/public/assets/images/banner3.jpg";
import bannerImage4 from "@/public/assets/images/banner4.jpg";


import { CitiesContainer, CitiesTextContainer } from "./Cities.styles";

import { SectionHeading } from "../HomePage.styles";
import { Text } from "@/components/UI";

const Cities = () => {
  const cities = [
    { name: "Karachi", image: bannerImage1, width: 6 },
    { name: "Islamabad", image: bannerImage2, width: 6 },
    { name: "Peshawar", image: bannerImage3, width: 4 },
    { name: "Lahore", image: bannerImage4, width: 4 },
    { name: "Quetta", image: bannerImage1, width: 4 },
  ];

  return (
    <Container maxWidth="false">
      <Container maxWidth="xl" disableGutters>
        <SectionHeading>
          <Text variant="header">
            Explore Restaurants By Cities
          </Text>
        </SectionHeading>
        <Grid container spacing={4}>
          {cities.map((city) => (
            <Grid item xs={12} sm={6} md={city.width} key={city.name}>
              <CitiesContainer>
                <Image
                  fill
                  sizes="100vw"
                  src={city.image}
                  alt={city.name}
                  style={{ objectFit: "cover" }}
                />
                <CitiesTextContainer>
                  <Text
                    variant="subHeader"
                    sx={{ fontWeight: "bold" }}
                  >
                    {city.name}
                  </Text>
                </CitiesTextContainer>
              </CitiesContainer>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Container>
  );
};

export default Cities;