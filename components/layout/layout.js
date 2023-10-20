import React from "react";
import Navbar from "../navbar/Navbar";

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <Navbar />
      {children}
    </React.Fragment>
  );
};

export default Layout;
