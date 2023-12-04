import * as yup from 'yup';

export const restaurantLocationSchema = yup.object().shape({
  address: yup.string().required('Restaurant address is required.'),
  state: yup.string().required('Restaurant State is required.'),
  city: yup.string().required('Restaurant City is required.'),
  country: yup.string().required('Restaurant Country is required.'),
});
