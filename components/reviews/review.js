import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

// Styles
import { FlexContainer, Text } from '../UI';
import { Box, Avatar, ImageList, ImageListItem, Pagination } from '@mui/material';
import * as Styles from './review.styles';

// Helpers
import { getError } from '@/helpers/snackbarHelpers';
import { getDate, getTimePassed } from '@/helpers/dateHelpers';

// Snackbar
import { enqueueSnackbar } from 'notistack';

// Services
import { getRestaurantReview, getUserReview } from '@/services/review';

// Components
import VoteOptions from './vote-options/vote';

import userImage from '@/public/assets/images/avatar.jpg';

const Review = ({ restaurantDetails = null, profileDetails = null }) => {
  const [reviews, setReviews] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);
  const reviewLimit = useRef(10);
  const offset = (page - 1) * 10;

  const name = profileDetails && `${profileDetails.firstName} ${profileDetails.lastName}`;

  const images = [userImage, userImage, userImage];

  const fetchRestaurantReviews = async () => {
    try {
      const response = await getRestaurantReview(
        restaurantDetails.id,
        reviewLimit.current,
        offset
      );
      setReviews(response.data.reviews);
      if (!totalPage) setTotalPage(Math.ceil(response.data.count / reviewLimit.current));
    } catch (e) {
      enqueueSnackbar({ variant: 'error', message: getError(e) });
    }
  };

  const fetchUserReviews = async () => {
    try {
      const response = await getUserReview(profileDetails.id);
      setReviews(response.data);
      if (!totalPage) setTotalPage(Math.ceil(response.data.length / reviewLimit.current));
    } catch (e) {
      enqueueSnackbar({ variant: 'error', message: getError(e) });
    }
  };

  useEffect(() => {
    if (restaurantDetails?.id) fetchRestaurantReviews();
  }, [restaurantDetails?.id, page]);

  useEffect(() => {
    if (profileDetails?.id) fetchUserReviews();
  }, [profileDetails?.id]);

  const pageHandler = (event, newPage) => {
    setPage(newPage);
  };

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
      {reviews
        .slice(
          profileDetails ? (page - 1) * reviewLimit.current : 0,
          profileDetails ? page * reviewLimit.current : reviews.length
        )
        .map((review) => (
          <Styles.ReviewCard key={review.slug}>
            <Styles.UserDetails>
              <Avatar sx={{ width: 72, height: 72 }}>
                {review.userId.name?.slice(0, 1) || name?.slice(0, 1)}
              </Avatar>
              <Box>
                <Text variant="main" fontWeight={500} sx={{ display: 'block' }}>
                  {review.userId.name || name}
                </Text>
                <Text variant="body" sx={{ display: 'block', mt: 0.5 }}>
                  {getDate(review.createdAt)}, {getTimePassed(review.createdAt)}
                </Text>
              </Box>
            </Styles.UserDetails>
            <Text variant="body" sx={{ display: 'block', mt: 2 }}>
              {review.content}
            </Text>
            <Box sx={{ width: '100%', mt: 3 }}>
              <ImageList rowHeight={200} cols={2} variant="quilted">
                {renderImages()}
              </ImageList>
            </Box>
            {/* <VoteOptions /> */}
          </Styles.ReviewCard>
        ))}
      <FlexContainer>
        <Pagination
          color="primary"
          count={totalPage}
          variant="outlined"
          shape="rounded"
          sx={{
            mt: 3,
            mb: 3,
            '& .MuiPaginationItem-root:not(.Mui-selected)': {
              color: 'text.secondary',
            },
          }}
          page={page}
          onChange={pageHandler}
        />
      </FlexContainer>
    </React.Fragment>
  );
};

export default Review;
