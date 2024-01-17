import React from 'react';
import { ProfileProvider } from '@/context/profile-context';
import { getAllUserSlugs, getUserBySlug } from '@/services';
import Profile from '@/components/profile/profile';

function ProfilePage({ user }) {
  return <ProfileProvider initialValue={user}>{user && <Profile />}</ProfileProvider>;
}

export default ProfilePage;

export async function getStaticProps({ params }) {
  const response = await getUserBySlug(params.id);

  return {
    props: {
      user: response.data,
    },
    revalidate: 300,
  };
}

export async function getStaticPaths() {
  const response = await getAllUserSlugs();

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
