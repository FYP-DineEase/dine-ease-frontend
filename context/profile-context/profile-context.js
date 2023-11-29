import React from 'react';

const ProfileContext = React.createContext({
  profileDetails: {
    background: null,
    newBackground: null,
    avatar: null,
    firstName: null,
    lastName: null,
    email: null,
    location: null,
    joinDate: null,
    description: null,
  },
  profileDetailsHandler: (updatedDetails) => {},
  profileAvatarHandler: (image) => {},
  profileBackgroundHandler: (image) => {},
  profileNewBackgroundHandler: (image) => {},
});

export default ProfileContext;
