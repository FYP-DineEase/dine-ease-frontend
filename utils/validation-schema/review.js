import * as yup from 'yup';

export const reviewSchema = yup.object().shape({
  content: yup.string().required('Review content is required.'),
  rating: yup.number().integer().positive().required('Rating is required'),
});