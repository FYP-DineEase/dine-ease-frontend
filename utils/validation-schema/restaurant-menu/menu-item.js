import * as yup from 'yup';

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
  description: yup.string().max(10, 'Description must be at most 10 words'),
  image: yup.mixed().required('Image is required!'),
});
