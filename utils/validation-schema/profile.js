import * as yup from 'yup';

export const profileSchema = yup.object().shape({
  firstName: yup
    .string()
    .min(3, 'Must be at least 3 characters.')
    .matches(/^[a-zA-Z]+$/, 'First name should only contain letters.')
    .required('first name is required.'),
  lastName: yup
    .string()
    .min(3, 'Must be at least 3 characters.')
    .matches(/^[a-zA-Z]+$/, 'Last name should only contain letters.')
    .required('last name is required.'),
  description: yup.string(),
});
