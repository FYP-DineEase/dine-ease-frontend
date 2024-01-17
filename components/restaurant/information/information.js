import React from 'react';

// Styles
import * as Styles from './information.styles';
import { FlexContainer, SectionContainer, Text } from '@/components/UI';
import { Divider, Grid, useMediaQuery } from '@mui/material';

// Icons
import LunchDiningIcon from '@mui/icons-material/LunchDining';

const Information = () => {
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down('md'));

  return (
    <SectionContainer container >
      <Grid item xs={12}>
        <Styles.InformationContent>
          <FlexContainer sx={{ flexDirection: 'column', gap: 1 }}>
            <Styles.IconContainer>
              <LunchDiningIcon sx={{ color: 'text.primary' }} />
            </Styles.IconContainer>
            <Text variant="body" fontWeight={800}>
              BBQ, Fast Food, Sea Food, Chinese
            </Text>
            <Text variant="sub" fontWeight={500}>
              Cuisines we offer
            </Text>
          </FlexContainer>
          <Divider
            orientation={isMobile ? 'horizontal' : 'vertical'}
            flexItem
            sx={{ backgroundColor: 'grey' }}
          />
          <FlexContainer sx={{ flexDirection: 'column', gap: 1 }}>
            <Styles.IconContainer>
              <LunchDiningIcon sx={{ color: 'text.primary' }} />
            </Styles.IconContainer>
            <Text variant="body" fontWeight={800}>
              123 Main Street, Pechs block-2, Near Zahid Restaurant
            </Text>
            <Text variant="sub" fontWeight={500}>
              Our Location
            </Text>
          </FlexContainer>
          <Divider
            orientation={isMobile ? 'horizontal' : 'vertical'}
            flexItem
            sx={{ backgroundColor: 'grey' }}
          />
          <FlexContainer sx={{ flexDirection: 'column', gap: 1 }}>
            <Styles.IconContainer>
              <LunchDiningIcon sx={{ color: 'text.primary' }} />
            </Styles.IconContainer>
            <Text variant="body" fontWeight={800}>
              +923316116611
            </Text>
            <Text variant="sub" fontWeight={500}>
              Contact Us
            </Text>
          </FlexContainer>
        </Styles.InformationContent>
      </Grid>
    </SectionContainer>
  );
};

export default Information;
