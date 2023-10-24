import React from "react";
import Image from "next/image";
import LoginForm from "./form/login-form";
import { Overlay } from "../UI/overlay";

const Login = () => {
  return (
    <React.Fragment>
      <Image
        src="/assets/pages/login-background.jpg"
        alt="Form"
        fill={true}
        priority={true}
        unoptimized={false}
        style={{
          transform: "scaleX(-1)",
          objectFit: "cover",
          position: "absolute",
          zIndex: -2,
        }}
      />
      <Overlay />
      <LoginForm />
    </React.Fragment>
  );
};

export default Login;
