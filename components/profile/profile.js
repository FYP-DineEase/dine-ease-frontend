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
      <Grid container>
        <Grid item xs={12} md={3} sx={{ order: { xs: 1, md: 0 } }}>
          <About />
        </Grid>
        <Grid item xs={12} md={6} sx={{ order: { xs: 3, md: 0 } }}>
          <Navigation />
        </Grid>
        <Grid item xs={12} md={3} sx={{ order: { xs: 2, md: 0 } }}>
          <About />
        </Grid>
      </Grid>
    </ProfileContainer>
  );
};

export default Profile;
