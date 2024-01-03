import React, { useState } from 'react';
import ProfileContext from './profile-context';

const ProfileProvider = ({ children, initialValue }) => {
  const [details, setDetails] = useState(initialValue);

  const detailsHandler = (updatedDetails) => {
    setDetails((prevState) => ({
      ...prevState,
      ...updatedDetails
    }));
  };

  const avatarHandler = (image) => {
    setDetails((prevState) => ({
      ...prevState,
      avatar: image,
    }));
  };

  const coverHandler = (image) => {
    setDetails((prevState) => ({
      ...prevState,
      cover: image,
      newCover: null,
    }));
  };

  const newCoverHandler = (image) => {
    setDetails((prevState) => ({
      ...prevState,
      newCover: image,
    }));
  };

  const profileContext = {
    details,
    detailsHandler,
    avatarHandler,
    coverHandler,
    newCoverHandler,
  };

  return (
    <ProfileContext.Provider value={profileContext}>{children}</ProfileContext.Provider>
  );
};

export default ProfileProvider;
