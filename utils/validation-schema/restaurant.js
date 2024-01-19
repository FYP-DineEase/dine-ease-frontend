import * as yup from 'yup';

export const restaurantDetailsSchema = yup.object().shape({
  name: yup.string().required('Restaurant name is required.'),
  taxId: yup.string().required('Tax ID is required.'),
  taxIdAgreement: yup
    .boolean()
    .oneOf([true], 'You must agree that the provided Tax ID is valid'),
});

export const restaurantLeglitiesSchema = yup.object().shape({
  cuisine: yup.array().min(1, 'Cuisine type is required.'),
  phoneNumber: yup.string().required('Contact Number is required.'),
  contactAgreement: yup
    .boolean()
    .oneOf([true], 'You must agree that the provided contact is valid.'),
});

export const restaurantLocationSchema = yup.object().shape({
  address: yup.string().required('Restaurant address is required.'),
  place: yup.string().required('Restaurant place is required.'),
});

export const restaurantEditSchema = yup
  .object()
  .concat(restaurantDetailsSchema)
  .concat(restaurantLocationSchema)
  .concat(restaurantLeglitiesSchema);

export const menuItemSchema = yup.object().shape({
  name: yup
    .string()
    .required('Name is required')
    .max(20, 'Name must be at most 20 characters'),
  price: yup
    .number()
    .positive('Price must be a positive value')
    .integer('Price must be an integer')
    .required('Price is required'),
  description: yup.string().min(10).max(200),
  image: yup.mixed().required('Image is required!'),
});
