import Navbar from "@/components/navbar/Navbar";

import "@/styles/globals.css";

import { ThemeProvider, createTheme } from "@mui/material";

import theme from "@/styles/theme/theme";

const customTheme = createTheme(theme());

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={customTheme}>
      <Navbar />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
