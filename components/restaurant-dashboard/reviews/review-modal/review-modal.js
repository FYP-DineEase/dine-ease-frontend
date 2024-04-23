import React from 'react';
import Image from 'next/image';

// Styles
import * as Styles from './review-modal.styles';
import { ModalCancelIcon, Text } from '@/components/UI';
import {
  Avatar,
  Box,
  Dialog,
  DialogContent,
  DialogTitle,
  ImageList,
  ImageListItem,
  Rating,
  useMediaQuery,
} from '@mui/material';

// Icons
import CloseIcon from '@mui/icons-material/Close';

// Helpers
import { getDate, getTimePassed } from '@/helpers/dateHelpers';
import { getFileUrl } from '@/helpers/fileHelpers';

// Components
import VoteOptions from '@/components/reviews/vote-options/vote';
import Link from 'next/link';

const ReviewModal = ({ review, showModal, handleCloseModal }) => {
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down('md'));

  const renderImages = (restaurantId, reviewId, images) => {
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
          src={
            images.length &&
            getFileUrl(
              process.env.NEXT_PUBLIC_AWS_S3_REVIEWS_BUCKET,
              `${restaurantId}/${reviewId}/${images[index]}`
            )
          }
          alt="review-image"
          fill
          sizes="100%"
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
    <Dialog
      open={showModal}
      onClose={handleCloseModal}
      scroll="paper"
      fullWidth={true}
      maxWidth="md"
    >
      <ModalCancelIcon onClick={handleCloseModal}>
        <CloseIcon color="secondary" fontSize="medium" />
      </ModalCancelIcon>
      <DialogTitle>
        <Text variant="subHeader" color="text.secondary">
          View Review
        </Text>
      </DialogTitle>
      <DialogContent dividers={true}>
        <Styles.ReviewCard>
          <Styles.UserDetails>
            <Link href={`/profile/${review.slug || review.userId.slug}`}>
              <Avatar sx={{ width: 72, height: 72 }}>{review.name?.slice(0, 1)}</Avatar>
            </Link>
            <Box>
              <Link href={`/profile/${review.slug || review.userId.slug}`}>
                <Text
                  variant="main"
                  fontWeight={500}
                  sx={{ display: 'block', color: 'text.secondary' }}
                >
                  {review.name}
                </Text>
              </Link>
              <Rating value={review.rating} precision={0.5} readOnly sx={{ mt: 0.25 }} />
              <Text variant="sub" sx={{ display: 'block', color: 'text.secondary' }}>
                {getDate(review.createdAt)}, {getTimePassed(review.createdAt)}
              </Text>
            </Box>
          </Styles.UserDetails>
          <Text variant="body" sx={{ display: 'block', mt: 2, color: 'text.secondary' }}>
            {review.content}
          </Text>
          <Box sx={{ width: '100%', mt: 3 }}>
            <ImageList rowHeight={isMobile ? 150 : 200} cols={2} variant="quilted">
              {renderImages(review.restaurantId, review.id, review.images)}
            </ImageList>
          </Box>
          <VoteOptions
            reviewId={review.id}
            reviewVotes={review.votes}
            reviewUserId={review.id || review.userId.id}
          />
        </Styles.ReviewCard>
      </DialogContent>
    </Dialog>
  );
};

export default ReviewModal;
