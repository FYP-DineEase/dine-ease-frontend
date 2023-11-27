import React from 'react';

const ProfileContext = React.createContext({
  background: null,
  oldBackground: null,
  backgroundConfirmation: false,
  avatar: null,
  profileDetails: {
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
  backgroundConfirmationHandler: () => {},
});

export default ProfileContext;
