import { Provider } from 'react-redux';
import { wrapper } from '@/store/store';
import Layout from '@/components/layout/layout';
import { ThemeContextProvider } from '@/context/theme-provider';
import '@/styles/globals.css';

export default function App({ Component, pageProps, ...rest }) {
  const { store } = wrapper.useWrappedStore(rest);

  return (
    <Provider store={store}>
      <ThemeContextProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeContextProvider>
    </Provider>
  );
}
