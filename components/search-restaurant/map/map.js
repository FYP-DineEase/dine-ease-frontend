import React from 'react';
import Image from 'next/image';

// Styles
import { Box } from '@mui/material';

// Utils
import { NAV_HEIGHT } from '@/utils/constants';

import userImage from '@/public/assets/images/avatar.jpg';

const Map = () => {
  return (
    <Box sx={{ height: `calc(100vh - ${NAV_HEIGHT}px)`, position: 'relative' }}>
      <Image src={userImage} fill sizes="100vw" alt="profile-background" />
    </Box>
  );
};

export default Map;
