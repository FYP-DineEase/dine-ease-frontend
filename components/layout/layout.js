import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import Navbar from "../navbar/Navbar";
import { getUser } from "@/store/authActions";
import { useMediaQuery } from "@mui/material";

// snackabr
import { SnackbarProvider } from "notistack";
import { StyledMaterialDesignContent } from "../UI/snackbar";

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
          horizontal: isMobile ? "center" : "right",
        }}>
        <Navbar />
        {children}
      </SnackbarProvider>
    </React.Fragment>
  );
};

export default Layout;
