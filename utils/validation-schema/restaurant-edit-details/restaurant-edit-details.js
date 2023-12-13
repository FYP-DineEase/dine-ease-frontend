import * as yup from 'yup';

import { restaurantDetailsSchema } from '../restaurant-listing/restaurant-details';
import { restaurantLocationSchema } from '../restaurant-listing/restaurant-location';
import { restaurantLeglitiesSchema } from '../restaurant-listing/restaurant-legalities';

export const restaurantEditDetailsSchema = yup
  .object()
  .concat(restaurantDetailsSchema)
  .concat(restaurantLocationSchema)
  .concat(restaurantLeglitiesSchema);
