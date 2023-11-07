import React from "react";
import Profile from "@/components/profile/profile";

function ProfilePage(props) {
   return (
      <React.Fragment>
        <Profile />
      </React.Fragment>
   );
}

export default ProfilePage;

export async function getStaticProps(context) {
   const profileId = context.params.id;
   console.log(profileId);
}