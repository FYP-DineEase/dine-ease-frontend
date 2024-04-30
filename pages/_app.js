import { useRouter } from 'next/router';
import { Elements } from '@stripe/react-stripe-js';

// Store
import { Provider } from 'react-redux';
import { persistor, store } from '@/store/store';
import { PersistGate } from 'redux-persist/integration/react';

// Styles
import { ThemeContextProvider } from '@/context/theme-provider';
import '@/styles/globals.css';

// Layout
import Layout from '@/components/layout/layout';

// Utils
import { options, stripePromise } from '@/utils/stripe';

const AppComponent = ({ Component, pageProps, ...rest }) => {
  const router = useRouter();
  const getLayout = Component.getLayout || ((page) => page);

  return (
    <Provider store={store}>
      <PersistGate loading={<h1>Loading</h1>} persistor={persistor}>
        <Elements stripe={stripePromise} options={options}>
          <ThemeContextProvider>
            <Layout>{getLayout(<Component {...pageProps} key={router.asPath} />)}</Layout>
          </ThemeContextProvider>
        </Elements>
      </PersistGate>
    </Provider>
  );
};

export default AppComponent;
