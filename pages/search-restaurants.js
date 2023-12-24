import React from 'react';
import SearchRestaurant from '@/components/search-restaurant/search-restaurant';

// Services
import { getApprovedRestaurants } from '@/services';
import { connectToMeilisearch } from '@/services/meilisearch';

const SearchPage = ({ restaurants }) => {
  return <SearchRestaurant restaurants={restaurants} />;
};

export default SearchPage;

export const getStaticProps = async () => {
  const restaurants = await getApprovedRestaurants();

  const client = connectToMeilisearch();
  client
    .index('restaurants')
    .addDocuments(restaurants.data, { primaryKey: 'id' })
    .catch((error) => console.error('MeiliSearch Error:', error));

  return {
    props: { restaurants: restaurants.data },
    revalidate: 10,
  };
};
