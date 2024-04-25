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

// Services
import { getApprovedRestaurants } from '@/services';
import { connectToMeilisearch } from '@/services/meilisearch';

// Utils
import { options, stripePromise } from '@/utils/stripe';

const meili = connectToMeilisearch();

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

export const getStaticProps = async () => {
  const { data } = await getApprovedRestaurants();
  const { restaurants } = data;

  const modifiedRestaurants = restaurants.map((restaurant) => ({
    ...restaurant,
    categories: restaurant.categories[0].split(', '),
    _geo: {
      lat: restaurant.location.coordinates[1],
      lng: restaurant.location.coordinates[0],
    },
  }));

  meili
    .index('restaurants')
    .addDocuments(modifiedRestaurants, { primaryKey: 'id' })
    .catch((error) => console.error('MeiliSearch Error:', error));

  meili
    .index('restaurants')
    .updateFilterableAttributes(['categories', '_geo'])
    .catch((error) => console.error('MeiliSearch Error:', error));

  meili
    .index('restaurants')
    .updateSortableAttributes(['rating', 'count'])
    .catch((error) => console.error('MeiliSearch Error:', error));

  return {
    props: { restaurants: modifiedRestaurants },
    revalidate: 300,
  };
};
