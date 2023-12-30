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
  const restaurantsData = await getApprovedRestaurants();
  const { restaurants } = restaurantsData.data;

  const restaurantsDummy = restaurants.map((restaurantDetails) => ({
    ...restaurantDetails,
    rating: getRandomValue(),
    reviewsCount: Math.floor(Math.random() * 1000),
  }));

  const client = connectToMeilisearch();

  client
    .index('restaurants')
    .addDocuments(restaurantsDummy, { primaryKey: 'id' })
    .catch((error) => console.error('MeiliSearch Error:', error));

  client
    .index('restaurants')
    .updateFilterableAttributes(['cuisine'])
    .catch((error) => console.error('MeiliSearch Error:', error));
    
  client
    .index('restaurants')
    .updateSortableAttributes(['rating', 'reviewsCount'])
    .catch((error) => console.error('MeiliSearch Error:', error));

  return {
    props: { restaurants: restaurantsDummy },
    revalidate: 10,
  };
};
