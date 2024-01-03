import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { enqueueSnackbar } from 'notistack';
import Profile from '@/components/profile/profile';
import ProfileProvider from '@/context/profile-context/profile-provider';
import { getAllUserSlugs, getUserBySlug } from '@/services';

function ProfilePage({ user }) {
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      enqueueSnackbar({
        variant: 'success',
        message: 'Profile Updated Successfully',
        onExited: () => router.push(`/login`, null, { shallow: true }),
      });
    }
  }, [router, user]);

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
