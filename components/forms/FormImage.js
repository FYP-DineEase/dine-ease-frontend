import React from "react";

import Image from "next/image";

import formImage from "@/assets/restaurant.jpg";

import { Box } from "@mui/material";

import { ResponsiveText } from "@/styles/common-styles/CommonStyles.styles";

import { FormImageContainer, FormImageTextContainer } from "./form.styles";

const FormImage = ({ headerText, subHeaderText }) => {
  return (
    <FormImageContainer>
      <Image
        src={formImage}
        alt="Form"
        fill={true}
        sizes="100vw"
        style={{
          objectFit: "cover",
          position: "absolute",
        }}
      />
      <FormImageTextContainer>
        <Box>
          <ResponsiveText variant="header" sx={{ fontWeight: "bold" }}>
            {headerText}
          </ResponsiveText>
        </Box>
        <Box width="60%">
          <ResponsiveText variant="mainBody">{subHeaderText}</ResponsiveText>
        </Box>
      </FormImageTextContainer>
    </FormImageContainer>
  );
};

export default FormImage;
