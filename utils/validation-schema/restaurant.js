import * as yup from 'yup';

export const restaurantDetailsSchema = yup.object().shape({
  name: yup
    .string()
    .trim()
    .min(3, 'Must be at least 3 characters.')
    .max(30, 'Must be at most 30 characters.')
    .required('Restaurant name is required.'),
  taxId: yup
    .string()
    .matches(/^\d{13}$/, 'Tax ID must be a 13-digit number.')
    .required('Tax ID is required.'),
  taxIdAgreement: yup
    .boolean()
    .oneOf([true], 'You must agree that the provided Tax ID is valid'),
});

export const restaurantLeglitiesSchema = yup.object().shape({
  categories: yup.array().min(1, 'Category type is required.'),
  phoneNumber: yup.string().required('Contact Number is required.'),
  contactAgreement: yup
    .boolean()
    .oneOf([true], 'You must agree that the provided contact is valid.'),
});

export const restaurantLocationSchema = yup.object().shape({
  address: yup
    .string()
    .trim()
    .min(10, 'Must be at least 10 characters.')
    .max(100, 'Must be at most 100 characters.')
    .required('Restaurant is required.'),
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
    .min(3, 'Must be at least 3 characters.')
    .max(15, 'Must be at most 15 characters.')
    .matches(/^[a-zA-Z]+$/, 'Name should only contain letters.')
    .required('Name is required.'),
  price: yup.string().required('Price is required'),
  description: yup
    .string()
    .min(3, 'Must be at least 3 characters.')
    .max(100, 'Must be at most 100 characters.')
    .matches(/^[a-zA-Z]+$/, 'Description should only contain letters.')
    .required('Description is required.'),
  image: yup.mixed().required('Image is required!'),
});
