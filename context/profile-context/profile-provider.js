import React, { useState } from 'react';
import ProfileContext from './profile-context';

import userImage from '@/public/assets/images/avatar.jpg';

const ProfileContextProvider = ({ children }) => {
  const user = {
    avatar:
      'https://images.unsplash.com/photo-1700925338124-feb7c3dae1d9?q=80&w=2576&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    background: userImage,
    newBackground: null,
    firstName: 'Mujtaba',
    lastName: 'Shafiq',
    description:
      'Ha djwjfwqfm fqf  q mf qf oqwfofwoqf qfwqwfn nfqnwfnqwf  nq  f  nqwf n  qfn oqwnofqnpfwnopq  qpfnwnpfqwnopfqwnop qnffqweoqfonnopqfw nopqwfnop n noqwf',
    email: 'mujtabashafiq@gmail.com',
    location: 'Karachi, Pakistan',
    joinDate: '22-October-2023',
  };

  const [profileDetails, setProfileDetails] = useState(user);

  const profileDetailsHandler = (updatedDetails) => {
    setProfileDetails((prevState) => ({
      ...prevState,
      firstName: updatedDetails.firstName,
      lastName: updatedDetails.lastName,
      description: updatedDetails.description,
    }));
  };

  const profileAvatarHandler = (image) => {
    setProfileDetails((prevState) => ({
      ...prevState,
      avatar: image,
    }));
  };

  const profileBackgroundHandler = (image) => {
    setProfileDetails((prevState) => ({
      ...prevState,
      background: image,
    }));
  };

  const profileNewBackgroundHandler = (image) => {
    setProfileDetails((prevState) => ({
      ...prevState,
      newBackground: image,
    }));
  };

  const profileContext = {
    profileDetails: profileDetails,
    profileDetailsHandler: profileDetailsHandler,
    profileAvatarHandler: profileAvatarHandler,
    profileBackgroundHandler: profileBackgroundHandler,
    profileNewBackgroundHandler: profileNewBackgroundHandler,
  };

  return (
    <ProfileContext.Provider value={profileContext}>{children}</ProfileContext.Provider>
  );
};

export default ProfileContextProvider;
