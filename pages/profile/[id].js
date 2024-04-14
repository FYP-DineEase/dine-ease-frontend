import React from 'react';
import { ProfileProvider } from '@/context/profile';
import Profile from '@/components/profile/profile';
import { getAllUserSlugs, getUserBySlug } from '@/services';

function ProfilePage({ user }) {
  return <ProfileProvider initialValue={user}>{user && <Profile />}</ProfileProvider>;
}

export default ProfilePage;

ProfilePage.getInitialProps = async ({ query }) => {
  const { data } = await getUserBySlug(query.id);
  return {
    user: data,
  };
};

// export async function getStaticProps({ params }) {
//   const { data } = await getUserBySlug(params.id);

//   return {
//     props: {
//       user: data,
//     },
//   };
// }

// export async function getStaticPaths() {
//   const { data } = await getAllUserSlugs();

//   const paths = data
//     ? data.map((s) => ({
//         params: { id: s.slug },
//       }))
//     : [];

//   return {
//     paths,
//     fallback: 'blocking',
//   };
// }
