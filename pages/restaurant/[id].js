import React from 'react';
import Restaurant from '@/components/restaurant/restaurant';
import { getRestaurantBySlug, getRestaurantSlugs } from '@/services';

const RestaurantPage = ({ restaurant }) => {
  return <Restaurant restaurant={restaurant} />;
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
