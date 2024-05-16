import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { useSelector } from 'react-redux';
import { selectUserState } from '@/store/user/userSlice';

import { useProfileContext } from '@/context/profile';

import { enqueueSnackbar } from 'notistack';

// Styles
import * as Styles from './dining-plan-card.styles';
import { FlexContainer, PrimaryButton, Text } from '@/components/UI';
import { Box, Card, CardContent, Grid, IconButton, Rating, Tooltip } from '@mui/material';

// Icons
import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates';
import Delete from '@mui/icons-material/Delete';
import Edit from '@mui/icons-material/Edit';

// Helpers
import { getDate, getTime } from '@/helpers/dateHelpers';
import { getError } from '@/helpers/snackbarHelpers';
import { getFileUrl } from '@/helpers/fileHelpers';

// Services
import { deletePlan, getUserPlans, updatePlan } from '@/services/dining-plan';

// Components
import DiningPlanModal from '@/components/modal/dining-plan-modal/dining-plan-modal';
import DeleteModal from '@/components/modal/delete-modal/delete-modal';

const DiningPlanCard = () => {
  const user = useSelector(selectUserState);

  const [plans, setPlans] = useState([]);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showUpdateModal, setShowUpdateModal] = useState(false);

  const { details } = useProfileContext();

  const planDetails = useRef(null);

  const fetchUserPlans = async () => {
    try {
      const response = await getUserPlans(details.id);
      setPlans(response.data);
    } catch (e) {
      enqueueSnackbar({ variant: 'error', message: getError(e) });
    }
  };

  useEffect(() => {
    if (details?.id) fetchUserPlans();
  }, [details?.id]);

  const handleReviewDelete = async () => {
    const response = await deletePlan(planDetails.current.id);
    setPlans((prevState) =>
      prevState.filter((plan) => plan.id !== planDetails.current.id)
    );
    enqueueSnackbar({
      variant: 'success',
      message: response.data,
    });
  };

  const handleReviewUpdate = async (formData) => {
    const response = await updatePlan(planDetails.current.id, formData);
    const updatedPlans = [...plans];
    const updateIndex = updatedPlans.findIndex(
      (plan) => plan.id === planDetails.current.id
    );
    updatedPlans[updateIndex] = response.data;
    setPlans(updatedPlans);
  };

  if (plans.length === 0) {
    return (
      <FlexContainer mt={10} gap={2}>
        <TipsAndUpdatesIcon fontSize="large" color="primary" />
        <Text variant="subHeader">Currently No Plans</Text>
      </FlexContainer>
    );
  }

  return (
    <React.Fragment>
      {showDeleteModal && (
        <DeleteModal
          showModal={showDeleteModal}
          handleCloseModal={() => setShowDeleteModal(false)}
          deleteHandler={handleReviewDelete}
        />
      )}
      {showUpdateModal && (
        <DiningPlanModal
          showModal={showUpdateModal}
          handleCloseModal={() => setShowUpdateModal(false)}
          updateHandler={handleReviewUpdate}
          plan={planDetails.current}
        />
      )}
      <Grid container justifyContent="center" spacing={2}>
        {plans.map((plan, index) => (
          <Grid item xs={12} md={12} key={index}>
            <Card sx={{ borderRadius: '30px' }}>
              <CardContent sx={{ position: 'relative' }}>
                {user.id === (plan.userId.id || plan.userId) && (
                  <Styles.Options>
                    <Tooltip title="Update Review" placement="top" arrow>
                      <IconButton
                        onClick={() => {
                          setShowUpdateModal(true);
                          planDetails.current = plan;
                        }}
                        color="primary"
                      >
                        <Edit />
                      </IconButton>
                    </Tooltip>
                    <Tooltip title="Delete Review" placement="top" arrow>
                      <IconButton
                        onClick={() => {
                          setShowDeleteModal(true);
                          planDetails.current = plan;
                        }}
                        color="primary"
                      >
                        <Delete />
                      </IconButton>
                    </Tooltip>
                  </Styles.Options>
                )}
                <Styles.PlanDetails>
                  <Styles.RestaurantImage>
                    <Image
                      src={
                        (plan.restaurant.cover &&
                          getFileUrl(
                            process.env.NEXT_PUBLIC_AWS_S3_RESTAURANTS_BUCKET,
                            `${plan.restaurant.id}/cover/${plan.restaurant.cover}`
                          )) ||
                        '/assets/images/bg-placeholder.png'
                      }
                      alt="restaurant-cover"
                      fill
                      sizes="100%"
                      style={{ borderRadius: '5px' }}
                    />
                  </Styles.RestaurantImage>

                  <Box maxWidth="60%">
                    <Text
                      variant="main"
                      color="secondary"
                      sx={{ fontWeight: 900, display: 'block', mb: 3 }}
                    >
                      {plan.title}
                    </Text>
                    <Text
                      variant="subHeader"
                      color="text.secondary"
                      sx={{ fontWeight: 500, display: 'block', mb: 1 }}
                    >
                      {plan.restaurant.name}
                    </Text>
                    <FlexContainer sx={{ justifyContent: 'left', gap: 1, mb: 3 }}>
                      <Rating value={plan.restaurant.rating} size="small" readOnly />
                      <Text variant="sub" color="text.ternary">
                        {plan.restaurant.rating} ({plan.restaurant.count} Reviews)
                      </Text>
                    </FlexContainer>
                    <Text
                      variant="body"
                      color="text.secondary"
                      sx={{ display: 'block', mb: 3 }}
                    >
                      {plan.description}
                    </Text>
                    <Text
                      variant="body"
                      color="secondary"
                      sx={{ display: 'block', fontWeight: 900 }}
                    >
                      <Text variant="body" color="text.secondary" mr={1}>
                        Timing:
                      </Text>
                      {getDate(plan.date)} {getTime(plan.date)}
                    </Text>
                  </Box>
                </Styles.PlanDetails>
                <Link
                  href={`/restaurant/${plan.restaurant.slug}`}
                  style={{ position: 'absolute', right: 20, bottom: 15 }}
                >
                  <PrimaryButton>
                    <Text variant="sub" fontWeight={800}>
                      View
                    </Text>
                  </PrimaryButton>
                </Link>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </React.Fragment>
  );
};

export default DiningPlanCard;
