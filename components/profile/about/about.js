import React from 'react';

// Styles
import { FlexContainer, Text } from '@/components/UI';
import * as Styles from './about.styles';

// Icons
import MailIcon from '@mui/icons-material/Mail';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { Box } from '@mui/material';

const About = () => {
  const socialLinks = {
    Facebook: <FacebookIcon />,
    Instagram: <InstagramIcon />,
    Youtube: <YouTubeIcon />,
  };

  return (
    <Styles.AboutContainer>
      <Styles.ProfileAvatar alt="Remy Sharp" src={'/assets/images/avatar.jpg'} />
      <Styles.DetailsContainer>
        <Text variant="subHeader">Mujtaba Shafiq</Text>
        <FlexContainer gap={1} mt={2}>
          <MailIcon />
          <Text variant="body">mujtaba.shafiq@gmail.com</Text>
        </FlexContainer>

        <Text variant="body" sx={{ textAlign: 'left', display: 'block', mt: 5 }}>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
          Ipsum has been standard dummy text ever since the 1500s, when an unknown printer
          took a galley of type and scrambled it to make a type specimen book.
        </Text>
      </Styles.DetailsContainer>
    </Styles.AboutContainer>
  );
};

export default About;
