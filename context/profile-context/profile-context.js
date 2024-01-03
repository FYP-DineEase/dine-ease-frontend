import React from 'react';

const ProfileContext = React.createContext({
  details: {
    id: null,
    firstName: null,
    lastName: null,
    email: null,
    avatar: null,
    cover: null,
    newCover: null,
    location: {
      country: null,
      coordinates: [null, null], // [0] is longitude, [1] is latitude
    },
    description: null,
    createdAt: null,
  },
  detailsHandler: () => {},
  avatarHandler: () => {},
  coverHandler: () => {},
  newCoverHandler: () => {},
});

export default ProfileContext;
