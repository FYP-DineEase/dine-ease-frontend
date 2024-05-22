import React, { useEffect, useState } from 'react';
import { useRestaurantContext } from '@/context/restaurant';
import { enqueueSnackbar } from 'notistack';

// Styles
import * as Styles from './feature-history.styles';
import { DashboardContainer, Text } from '@/components/UI';
import { Grid, IconButton } from '@mui/material';

// Icons
import PaymentsIcon from '@mui/icons-material/Payments';

// Services
import { getRestaurantSubscriptions } from '@/services';

// Components
import FeatureTable from './feature-table/feature-table';
import PlansModal from './plans-modal/plans-modal';
import FeatureChart from './feature-chart/feature-chart';

// Helpers
import { getError } from '@/helpers/snackbarHelpers';

const FeatureHistory = () => {
  const [showModal, setShowModal] = useState(false);

  const [plans, setPlans] = useState([]);
  const { details } = useRestaurantContext();

  const fetchRestaurantPayments = async () => {
    try {
      if (!details.id) return;
      const response = await getRestaurantSubscriptions(details.id);
      setPlans(response.data);
    } catch (e) {
      enqueueSnackbar({ variant: 'error', message: getError(e) });
    }
  };

  useEffect(() => {
    fetchRestaurantPayments();
  }, [details.id]);

  return (
    <React.Fragment>
      <PlansModal showModal={showModal} handleCloseModal={() => setShowModal(false)} />
      <DashboardContainer container columnSpacing={2} rowGap={1}>
        <Grid item xs={12}>
          <FeatureChart plans={plans} />
        </Grid>
        <Grid item xs={12}>
          <FeatureTable plans={plans} />
        </Grid>
        <Styles.DeletePopper open={true}>
          <IconButton
            color="primary"
            sx={{ borderRadius: 0 }}
            onClick={() => setShowModal(true)}
          >
            <PaymentsIcon sx={{ mr: 1 }} />
            <Text variant="body">Feature Restaurant</Text>
          </IconButton>
        </Styles.DeletePopper>
      </DashboardContainer>
    </React.Fragment>
  );
};

export default FeatureHistory;
