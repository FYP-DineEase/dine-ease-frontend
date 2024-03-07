import React from 'react';
import SearchRestaurant from '@/components/search-restaurant/search-restaurant';

// Services
import { getApprovedRestaurants } from '@/services';
import { connectToMeilisearch } from '@/services/meilisearch';

function getRandomValue() {
  const randomDecimal = Math.random();
  const scaledValue = Math.floor(randomDecimal * 5) + 1;
  return scaledValue;
}

const SearchPage = ({ restaurants }) => {
  return <SearchRestaurant restaurants={restaurants} />;
};

export default SearchPage;

export const getStaticProps = async () => {

  // const { data } = await getApprovedRestaurants();
  // const { restaurants } = data;

  // const restaurantsDummy = restaurants.map((restaurantDetails) => ({
  //   ...restaurantDetails,
  //   rating: getRandomValue(),
  //   reviewsCount: Math.floor(Math.random() * 1000),
  // }));

  // const meili = connectToMeilisearch();

  // meili
  //   .index('restaurants')
  //   .addDocuments(restaurantsDummy, { primaryKey: 'id' })
  //   .catch((error) => console.error('MeiliSearch Error:', error));

  // meili
  //   .index('restaurants')
  //   .updateFilterableAttributes(['categories'])
  //   .catch((error) => console.error('MeiliSearch Error:', error));

  // meili
  //   .index('restaurants')
  //   .updateSortableAttributes(['rating', 'reviewsCount'])
  //   .catch((error) => console.error('MeiliSearch Error:', error));

  return {
    // props: { restaurants: restaurantsDummy },
    props: { restaurants: [] },
    revalidate: 300,
  };
};
