import React from 'react';
import Image from 'next/image';

// Components
import VoteOptions from './vote-options/vote';

// Styles
import { Text } from '../UI';
import { Box, Avatar, ImageList, ImageListItem, Typography } from '@mui/material';
import * as Styles from './review.styles';

import userImage from '@/public/assets/images/avatar.jpg';

const Review = () => {
  const images = [userImage, userImage, userImage];

  const renderImages = () => {
    const imageCount = Math.min(images.length, 3);
    const layout = [
      { rows: 2, cols: images.length === 1 ? 2 : 1 },
      { rows: images.length === 2 ? 2 : 1, cols: 1 },
      {
        rows: 1,
        cols: 1,
        overlayText: images.length - 3,
        overlay: images.length === 3 ? false : true,
      },
    ];

    return layout.slice(0, imageCount).map((layout, index) => (
      <ImageListItem key={index} rows={layout.rows} cols={layout.cols}>
        <Image
          src={images[index]}
          alt="review-image"
          fill
          sizes="100vw"
          style={{ objectFit: 'cover' }}
        />
        {layout.overlay && (
          <Styles.ImageCountOverlay>
            <Text variant="main" color="text.primary">
              +{layout.overlayText}
            </Text>
          </Styles.ImageCountOverlay>
        )}
      </ImageListItem>
    ));
  };

  return (
    <React.Fragment>
      <Styles.ReviewCard>
        <Styles.UserDetails>
          <Avatar
            sx={{ width: 72, height: 72 }}
            alt="Remy Sharp"
            src={'/assets/images/avatar.jpg'}
          />
          <Box>
            <Text variant="main" fontWeight={500} sx={{ display: 'block' }}>
              Mujtaba Shafiq
            </Text>
            <Text variant="body" sx={{ display: 'block', mt: 0.5 }}>
              10 Oct 2023, 11:59 pm
            </Text>
          </Box>
        </Styles.UserDetails>
        <Text variant="body" sx={{ display: 'block', mt: 2 }}>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
          Ipsum has been standard dummy text ever since the 1500s, when an unknown printer
          took a galley of type and scrambled it to make a type specimen book.
          <Text variant="body" sx={{ display: 'block', mt: 2 }}>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been standard dummy text ever since the 1500s, when an unknown
            printer took a galley of type and scrambled it to make a type specimen book.
          </Text>
        </Text>
        <Box sx={{ width: '100%', mt: 3 }}>
          <ImageList rowHeight={200} cols={2} variant="quilted">
            {renderImages()}
          </ImageList>
        </Box>
        {/* <VoteOptions /> */}
      </Styles.ReviewCard>
      <Styles.ReviewCard>
        <Styles.UserDetails>
          <Avatar
            sx={{ width: 72, height: 72 }}
            alt="Remy Sharp"
            src={'/assets/images/avatar.jpg'}
          />
          <Box>
            <Text variant="main" fontWeight={500} sx={{ display: 'block' }}>
              Mujtaba Shafiq
            </Text>
            <Text variant="body" sx={{ display: 'block', mt: 0.5 }}>
              10 Oct 2023, 11:59 pm
            </Text>
          </Box>
        </Styles.UserDetails>
        <Text variant="body" sx={{ display: 'block', mt: 2 }}>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
          Ipsum has been standard dummy text ever since the 1500s, when an unknown printer
          took a galley of type and scrambled it to make a type specimen book.
          <Text variant="body" sx={{ display: 'block', mt: 2 }}>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been standard dummy text ever since the 1500s, when an unknown
            printer took a galley of type and scrambled it to make a type specimen book.
          </Text>
        </Text>
        <Box sx={{ width: '100%', mt: 3 }}>
          <ImageList rowHeight={200} cols={2} variant="quilted">
            {renderImages()}
          </ImageList>
        </Box>
        {/* <VoteOptions /> */}
      </Styles.ReviewCard>
    </React.Fragment>
  );
};

export default Review;
