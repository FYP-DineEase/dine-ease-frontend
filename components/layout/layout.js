import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import { getUser } from "@/store/auth/authActions";

// Styles
import { useMediaQuery } from "@mui/material";
import { PageContainer } from "../UI";

// Snackbar
import { SnackbarProvider } from "notistack";
import { StyledMaterialDesignContent } from "../UI";

const Layout = ({ children }) => {
  const dispatch = useDispatch();
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("md"));

  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);

  return (
    <React.Fragment>
      <SnackbarProvider
        maxSnack={3}
        autoHideDuration={2000}
        Components={{
          success: StyledMaterialDesignContent,
          error: StyledMaterialDesignContent,
        }}
        anchorOrigin={{
          vertical: "top",
          horizontal: isMobile ? "center" : "center",
        }}
      >
        <Navbar />
        <PageContainer>{children}</PageContainer>
        <Footer />
      </SnackbarProvider>
    </React.Fragment>
  );
};

export default Layout;
