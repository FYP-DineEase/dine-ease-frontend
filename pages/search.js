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
  // const { data } = await getApprovedRestaurants();
  // const { restaurants } = data;

  const meili = connectToMeilisearch();

  // meili
  //   .index('restaurants')
  //   .addDocuments(restaurants, { primaryKey: 'id' })
  //   .catch((error) => console.error('MeiliSearch Error:', error));

  meili
    .index('restaurants')
    .updateFilterableAttributes(['categories'])
    .catch((error) => console.error('MeiliSearch Error:', error));

  meili
    .index('restaurants')
    .updateSortableAttributes(['rating', 'count'])
    .catch((error) => console.error('MeiliSearch Error:', error));

  return {
    props: { restaurants: [] },
    revalidate: 300,
  };
};
