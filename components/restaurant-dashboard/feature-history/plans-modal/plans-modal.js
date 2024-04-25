import React, { useEffect, useState } from 'react';
import { enqueueSnackbar } from 'notistack';
import { useRestaurantContext } from '@/context/restaurant';

// Stripe
import { PaymentElement, useStripe, useElements } from '@stripe/react-stripe-js';

// Components
import PlansCard from './plans-card/plans-card';

// Styles
import { Dialog, DialogActions, DialogContent, DialogTitle, Grid } from '@mui/material';
import { ModalCancelIcon, PrimaryButton, Text } from '@/components/UI';

// Icons
import CloseIcon from '@mui/icons-material/Close';

// Services
import { getActivePlans, createIntent, createSubscription } from '@/services';

// Helpers
import { getError } from '@/helpers/snackbarHelpers';

const PlansModal = ({ showModal, handleCloseModal }) => {
  const stripe = useStripe();
  const elements = useElements();

  const { details } = useRestaurantContext();

  const [plans, setPlans] = useState([]);
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [openPaymentForm, setOpenPaymentForm] = useState(false);

  const fetchPlans = async () => {
    try {
      const response = await getActivePlans();
      setPlans(response.data);
    } catch (e) {
      enqueueSnackbar({ variant: 'error', message: getError(e) });
    }
  };

  useEffect(() => {
    fetchPlans();
  }, []);

  const planSelectionHandler = (planType) => {
    setSelectedPlan(planType);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (elements == null) return;

    // Validation and wallet collection
    const { error: submitError } = await elements.submit();
    if (submitError) {
      enqueueSnackbar({ variant: 'success', message: submitError.message });
      return;
    }

    // payload
    let clientSecret;
    const payload = { planId: selectedPlan.id, restaurantId: details.id };

    // retrieve clientSecret
    try {
      const response = await createIntent(payload);
      clientSecret = response.data;
    } catch (e) {
      enqueueSnackbar({ variant: 'error', message: getError(e) });
    }

    // create payment
    const { error, paymentIntent } = await stripe.confirmPayment({
      elements,
      clientSecret,
      confirmParams: {
        return_url: `https://google.com/`,
      },
      redirect: 'if_required',
    });

    if (error) {
      enqueueSnackbar({ variant: 'error', message: error.message });
      return;
    }

    // create subscription
    try {
      const response = await createSubscription({
        ...payload,
        stripeId: paymentIntent.id,
      });
      enqueueSnackbar({ variant: 'success', message: response.data });
    } catch (e) {
      enqueueSnackbar({ variant: 'error', message: getError(e) });
    }
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
        <Text variant="subHeader" color="text.secondary" fontWeight={800} mb={1.5}>
          Available Plans
        </Text>
      </DialogTitle>
      <DialogContent dividers={true}>
        <Grid container columnSpacing={1} rowGap={1}>
          {plans.map((plan) => (
            <Grid item xs={12} sm={6} md={4} key={plan.id}>
              <PlansCard
                item={plan}
                selectedPlan={selectedPlan}
                planSelectionHandler={planSelectionHandler}
              />
            </Grid>
          ))}
        </Grid>
      </DialogContent>
      <DialogActions>
        {openPaymentForm && (
          <form onSubmit={handleSubmit}>
            <PaymentElement />
            <PrimaryButton type="submit" disabled={!stripe || !elements}>
              <Text variant="body">Pay</Text>
            </PrimaryButton>
          </form>
        )}
        <PrimaryButton disabled={!selectedPlan}>
          <Text variant="body" onClick={() => setOpenPaymentForm(true)}>
            Next
          </Text>
        </PrimaryButton>
      </DialogActions>
    </Dialog>
  );
};

export default PlansModal;
