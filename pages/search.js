import React from 'react';
import SearchRestaurant from '@/components/search-restaurant/search-restaurant';

// Services
import { getApprovedRestaurants } from '@/services';
import { connectToMeilisearch } from '@/services/meilisearch';

const meili = connectToMeilisearch();

const SearchPage = ({ restaurants }) => {
  return <SearchRestaurant restaurants={restaurants} />;
};

export default SearchPage;

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
