import Navbar from "@/components/navbar/Navbar";

import { ThemeProvider, createTheme } from "@mui/material";

import theme from "@/styles/theme/theme";

import { Provider } from "react-redux";

import { wrapper } from "@/store/store";

import "@/styles/globals.css";

const customTheme = createTheme(theme());

export default function App({ Component, pageProps, ...rest }) {
  const { store } = wrapper.useWrappedStore(rest);

  return (
    <Provider store={store}>
      <ThemeProvider theme={customTheme}>
        <Navbar />
        <Component {...pageProps} />
      </ThemeProvider>
    </Provider>
  );
}
