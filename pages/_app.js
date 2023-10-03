import Navbar from "@/components/navbar/Navbar";
import "@/styles/globals.css";
import theme from "@/styles/theme/theme";
import { ThemeProvider, createTheme } from "@mui/material";

const customTheme = createTheme(theme());

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={customTheme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
