import React from 'react';

// Components
import EditProfileMenu from './menu/menu';

// Styles
import { Box } from '@mui/material';
import { Text } from '@/components/UI';
import * as Styles from './about.styles';

// Icons
import InfoIcon from '@mui/icons-material/InfoOutlined';
import TodayIcon from '@mui/icons-material/Today';
import LocationIcon from '@mui/icons-material/LocationOn';
import MailIcon from '@mui/icons-material/Mail';

const About = () => {
  return (
    <Styles.AboutContainer>
      <Styles.ProfileAvatar alt="Remy Sharp" src={'/assets/images/avatar.jpg'} />
      <EditProfileMenu />
      <Styles.DetailsContainer>
        <Text variant="subHeader" fontWeight={500}>
          Mujtaba Shafiq
        </Text>
        <Styles.IconContainer>
          <MailIcon />
          <Text variant="body">mujtaba.shafiq@gmail.com</Text>
        </Styles.IconContainer>
        <Styles.IconContainer>
          <LocationIcon />
          <Text variant="body">Karachi, Pakistan</Text>
        </Styles.IconContainer>
        <Styles.IconContainer>
          <TodayIcon />
          <Text variant="body">10 October 2023</Text>
        </Styles.IconContainer>
        <Box>
          <Styles.IconContainer>
            <InfoIcon />
            <Text variant="body" fontWeight={500}>
              About
            </Text>
          </Styles.IconContainer>
          <Text variant="body" sx={{ textAlign: 'left', display: 'block' }}>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been standard dummy text ever since the 1500s, when an unknown
            printer took a galley of type and scrambled it to make a type specimen book.
          </Text>
        </Box>
      </Styles.DetailsContainer>
    </Styles.AboutContainer>
  );
};

export default About;
