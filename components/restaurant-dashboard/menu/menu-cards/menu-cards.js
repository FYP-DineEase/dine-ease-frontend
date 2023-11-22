import React from 'react';
import Image from 'next/image';

//Styles
import { FlexContainer, Text } from '@/components/UI';
import { Delete, Edit } from '@mui/icons-material';
import { Box, Card, CardMedia, IconButton } from '@mui/material';
import * as Styles from './menu-cards.styles';

import userImage from '@/public/assets/images/avatar.jpg';

const MenuCards = ({ item }) => {
  return (
    <Card sx={{ width: '220px', height: '275px' }}>
      <CardMedia sx={{ height: '130px', position: 'relative' }}>
        <Image
          src={userImage}
          alt="menu-item"
          sizes="100vw"
          fill
          style={{ objectFit: 'cover' }}
        />
      </CardMedia>
      <Styles.CardContentContainer>
        <Text variant="body" color="text.secondary" fontWeight={800}>
          {item.name}
        </Text>
        <Text variant="sub" color="text.ternary">
          {item.description}
        </Text>
        <FlexContainer sx={{ justifyContent: 'space-between', width: '100%' }}>
          <Text variant="body" fontWeight={500} color="text.secondary">
            {item.price}
          </Text>
          <Box>
            <IconButton>
              <Edit fontSize="small" />
            </IconButton>
            <IconButton>
              <Delete fontSize="small" />
            </IconButton>
          </Box>
        </FlexContainer>
      </Styles.CardContentContainer>
    </Card>
  );
};

export default MenuCards;
