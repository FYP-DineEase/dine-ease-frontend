import React from "react";

import Image from "next/image";

//Form Image
import formImage from "@/public/assets/pages/form-svg.svg";

//Styled Components
import * as Styles from "./form.styles";

const FormImage = () => {
  return (
    <Styles.FormImageContainer>
      <Image
        src={formImage}
        alt="Form"
        fill={true}
        priority={false}
        sizes="100vw"
        style={{
          objectFit: "cover",
          position: "absolute",
        }}
      />
    </Styles.FormImageContainer>
  );
};

export default FormImage;
