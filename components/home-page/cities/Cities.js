import React from "react";

import Image from "next/image";

import { Container, Grid } from "@mui/material";

import bannerImage1 from "@/assets/banner1.jpg";
import bannerImage2 from "@/assets/banner2.jpg";
import bannerImage3 from "@/assets/banner3.jpg";
import bannerImage4 from "@/assets/banner4.jpg";

import { ResponsiveText } from "@/styles/common-styles/CommonStyles.styles";

import { CitiesContainer, CitiesTextContainer } from "./Cities.styles";

import { SectionHeading } from "../HomePage.styles";

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
          <ResponsiveText variant="header">
            Explore Restaurants By Cities
          </ResponsiveText>
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
                  <ResponsiveText
                    variant="subHeader"
                    sx={{ fontWeight: "bold" }}
                  >
                    {city.name}
                  </ResponsiveText>
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
