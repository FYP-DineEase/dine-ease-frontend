import React from 'react';
import { getAllMapSlugs, getMapBySlug } from '@/services';
import NavigationMap from '@/components/navigation-map/navigation-map';

function UserMapPage({ data }) {
  return <NavigationMap data={data} />;
}

export default UserMapPage;

export async function getStaticProps({ params }) {
  const response = await getMapBySlug(params.id);
  return {
    props: {
      data: response.data,
    },
    revalidate: 300,
  };
}

export async function getStaticPaths() {
  const response = await getAllMapSlugs();

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
