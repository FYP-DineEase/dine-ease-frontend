import React, { useState } from 'react';

//Styles
import * as Styles from './feature-history.styles';
import { DashboardContainer, Text } from '@/components/UI';
import { Grid, IconButton } from '@mui/material';

// Icons
import PaymentsIcon from '@mui/icons-material/Payments';

// Components
import FeatureTable from './feature-table/feature-table';
import PlansModal from './plans-modal/plans-modal';

const FeatureHistory = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <React.Fragment>
      <PlansModal showModal={showModal} handleCloseModal={() => setShowModal(false)} />
      <DashboardContainer container columnSpacing={2} rowGap={1}>
        <Grid item xs={12}>
          <div>halo</div>
        </Grid>
        <Grid item xs={12}>
          <FeatureTable />
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
