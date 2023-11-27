import React, { useState } from 'react';
import ProfileContext from './profile-context';

const ProfileContextProvider = ({ children }) => {
  const user = {
    firstName: 'Mujtaba',
    lastName: 'Shafiq',
    description:
      'Ha djwjd qjod qwowqfwqfm fqf  q mf qf oqwfofwoqf qfwqwfn nfqnwfnqwf  nq  f  nqwf n  qfn oqwnofqnpfwnopq  qpfnwnpfqwnopfqwnop qnffqweoqfonnopqfw nopqwfnop n noqwf',
    email: 'mujtabashafiq@gmail.com',
    location: 'Karachi, Pakistan',
    joinDate: '22-October-2023',
  };

  const [avatar, setAvatar] = useState('');
  const [background, setBackground] = useState('');
  const [backgroundConfirmation, setBackgroundConfirmation] = useState(false);
  const [profileDetails, setProfileDetails] = useState(user);

  const profileDetailsHandler = (updatedDetails) => {
    setProfileDetails((prevState) => ({ ...prevState, ...updatedDetails }));
  };

  const profileAvatarHandler = (image) => {
    setAvatar(image);
  };

  const profileBackgroundHandler = (image) => {
    setBackground(image);
  };

  const backgroundConfirmationHandler = () => {
    setBackgroundConfirmation((prevState) => !prevState);
  };

  const profileContext = {
    background: background,
    backgroundConfirmation: backgroundConfirmation,
    oldBackground: background,
    avatar: avatar,
    profileDetails: profileDetails,
    profileDetailsHandler: profileDetailsHandler,
    profileAvatarHandler: profileAvatarHandler,
    profileBackgroundHandler: profileBackgroundHandler,
    backgroundConfirmationHandler: backgroundConfirmationHandler,
  };

  return (
    <ProfileContext.Provider value={profileContext}>{children}</ProfileContext.Provider>
  );
};

export default ProfileContextProvider;
