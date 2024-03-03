import React from 'react';
import { ProfileProvider } from '@/context/profile';

import { getAllUserSlugs, getUserBySlug } from '@/services';

import Profile from '@/components/profile/profile';

function ProfilePage({ user }) {
  return <ProfileProvider initialValue={user}>{user && <Profile />}</ProfileProvider>;
}

export default ProfilePage;

export async function getStaticProps({ params }) {
  const { data } = await getUserBySlug(params.id);

  return {
    props: {
      user: data,
    },
  };
}

export async function getStaticPaths() {
  const { data } = await getAllUserSlugs();

  const paths = data
    ? data.map((s) => ({
        params: { id: s.slug },
      }))
    : [];

  return {
    paths,
    fallback: 'blocking',
  };
}
