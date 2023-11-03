import { Provider } from "react-redux";
import { wrapper } from "@/store/store";
import Layout from "@/components/layout/Layout";
import { ThemeContextProvider } from "@/context/theme-provider";
import "@/styles/globals.css";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export default function App({ Component, pageProps, ...rest }) {
  const { store } = wrapper.useWrappedStore(rest);

  return (
    <Provider store={store}>
      <ThemeContextProvider>
        <Layout>
          {/* <main className={montserrat.className}> */}
            <Component {...pageProps} />
          {/* </main> */}
        </Layout>
      </ThemeContextProvider>
    </Provider>
  );
}
