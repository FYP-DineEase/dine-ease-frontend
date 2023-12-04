import * as yup from 'yup';

export const restaurantLeglitiesSchema = yup.object().shape({
  taxId: yup.string().required('Tax ID is required.'),
  taxIdAgreement: yup
    .boolean()
    .oneOf([true], 'You must agree that the provided Tax ID is valid'),
});
