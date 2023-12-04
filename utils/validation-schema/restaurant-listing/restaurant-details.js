import * as yup from 'yup';

export const restaurantDetailsSchema = yup.object().shape({
  name: yup.string().required('Restaurant name is required.'),
  cuisine: yup.array().min(1, 'Cuisine type is required.'),
  contactNumber: yup.string().required('Contact Number is required.'),
  contactAgreement: yup
    .boolean()
    .oneOf([true], 'You must agree that the provided contact is valid.'),
});
