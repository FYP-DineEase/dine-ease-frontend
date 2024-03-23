import React, { useState } from 'react';
import Image from 'next/image';

// Styles
import * as Styles from './banner.styles';
import { FlexContainer, SectionContainer, Text } from '@/components/UI';

// Helpers
import { getFileUrl } from '@/helpers/fileHelpers';
import { Grid, Rating, Tooltip } from '@mui/material';

// Icons
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import StarIcon from '@mui/icons-material/Star';
import FavoriteIcon from '@mui/icons-material/Favorite';

const Banner = ({ restaurant }) => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isFavorite, setIsFavorite] = useState(false);

  const { images } = restaurant;

  const forwardImageHandler = () => {
    if (currentImage === images.length - 1) {
      setCurrentImage(0);
    } else {
      setCurrentImage((prevState) => prevState + 1);
    }
  };

  const backwardImageHandler = () => {
    if (currentImage === 0) {
      setCurrentImage(images.length - 1);
    } else {
      setCurrentImage((prevState) => prevState - 1);
    }
  };

  const favoriteHandler = async () => {};

  return (
    <SectionContainer container sx={{ mt: 0, mb: 0, width: '100%' }}>
      <Grid item xs={12}>
        <Styles.BannerContainer>
          <Image
            src={
              (images.length &&
                getFileUrl(
                  process.env.NEXT_PUBLIC_AWS_S3_RESTAURANTS_BUCKET,
                  `${restaurant.id}/images/${images[currentImage]}`
                )) ||
              '/assets/images/bg-placeholder.png'
            }
            alt="restaurant-image"
            fill
            sizes="100%"
            style={{ objectFit: 'cover' }}
          />
          <Styles.CarousalIcon sx={{ justifyContent: 'left' }}>
            <Styles.StyledIconButton onClick={backwardImageHandler} sx={{ ml: 2 }}>
              <KeyboardArrowLeftIcon />
            </Styles.StyledIconButton>
          </Styles.CarousalIcon>
          <Styles.CarousalIcon sx={{ justifyContent: 'right' }}>
            <Styles.StyledIconButton onClick={forwardImageHandler} sx={{ mr: 2 }}>
              <KeyboardArrowRightIcon />
            </Styles.StyledIconButton>
          </Styles.CarousalIcon>
          <Styles.RestaurantDetails>
            <Text variant="header" fontWeight={900} sx={{ display: 'block', mb: 1 }}>
              {restaurant.name}
            </Text>
            <FlexContainer>
              <Rating
                value={restaurant.rating}
                readOnly
                precision={0.5}
                sx={{ fontSize: '2rem' }}
                emptyIcon={
                  <StarIcon sx={{ color: 'static.primary', fontSize: '2rem' }} />
                }
              />
              <Text variant="sub">({restaurant.count} Reviews)</Text>
            </FlexContainer>
          </Styles.RestaurantDetails>
          <Tooltip
            title={isFavorite ? 'Remove from favorite' : 'Add to favorite'}
            placement="bottom"
            arrow
            sx={{ zIndex: 999 }}
          >
            <Styles.FavoriteIcon onClick={favoriteHandler}>
              <FavoriteIcon fontSize="large" />
            </Styles.FavoriteIcon>
          </Tooltip>
        </Styles.BannerContainer>
      </Grid>
    </SectionContainer>
  );
};

export default Banner;
