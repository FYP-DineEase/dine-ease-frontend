import React from 'react';

// Components
import Navigation from './navigation/navigation';
import Banner from './banner/banner';
import About from './about/about';

// Styles
import { Grid } from '@mui/material';
import { ProfileContainer } from './profile.styles';

const Profile = () => {
  return (
    <ProfileContainer>
      <Banner />
      <Grid container spacing={1}>
        <Grid item xs={12} lg={3} sx={{ display: { xs: 'none', lg: 'block' } }}>
          <About />
        </Grid>
        <Navigation />
      </Grid>
    </ProfileContainer>
  );
};

export default Profile;
