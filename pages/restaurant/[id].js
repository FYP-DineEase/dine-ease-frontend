import React from 'react';
import { RestaurantProvider } from '@/context/restaurant';

import { getRestaurantBySlug, getRestaurantSlugs } from '@/services';

import Restaurant from '@/components/restaurant/restaurant';

const RestaurantPage = ({ restaurant }) => {
  return (
    <RestaurantProvider>
      <Restaurant restaurant={restaurant} />
    </RestaurantProvider>
  );
};

export default RestaurantPage;

export async function getStaticProps({ params }) {
  const response = await getRestaurantBySlug(params.id);

  return {
    props: {
      restaurant: response.data,
    },
    revalidate: 300,
  };
}

export async function getStaticPaths() {
  const response = await getRestaurantSlugs();
  const slugs = response.data;

  const paths = slugs
    ? slugs.map((s) => ({
        params: { id: s.slug },
      }))
    : [];

  return {
    paths,
    fallback: false,
  };
}
