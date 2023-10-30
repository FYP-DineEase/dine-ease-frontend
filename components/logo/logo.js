import React from "react";

// styles
import { Text } from "../UI";
import * as Styles from "./logo.styles";

const Logo = ({ color = "primary", size = "header" }) => {
  return (
    <Styles.LogoContainer color={color}>
      <Styles.Logo variant={size} />
      <Text variant={size}>DineEase</Text>
    </Styles.LogoContainer>
  );
};

export default Logo;
