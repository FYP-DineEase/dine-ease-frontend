import { baseFontSizes } from "@/helpers/font-sizes";
import { Alert, Snackbar, styled, Typography } from "@mui/material";

export const ResponsiveText = styled(Typography)(({ theme, variant }) => ({
  fontFamily: '"Montserrat", sans-serif',
  fontSize: baseFontSizes[variant].default,
  [theme.breakpoints.down("sm")]: {
    fontSize: baseFontSizes[variant].small,
  },
}));

// export const CustomSnackbar = ({ snackbar, reset }) => {
//   return (
//     <Snackbar
//       open={snackbar.open}
//       autoHideDuration={10000}
//       // sx={{
//       //   fontSize: "17px",
//       //   color: "white",
//       //   zIndex: 1,
//       //   height: "22%",
//       //   width: "90%",
//       // }}
//       onClose={reset}
//       anchorOrigin={{ vertical: "top", horizontal: "left" }}
//     >
//       <Alert severity={snackbar.type}>
//         {snackbar.details || "Server is down , please try again later"}
//       </Alert>
//     </Snackbar>
//   );
// };
