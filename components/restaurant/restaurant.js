import React from 'react';

// Components
import Information from './information/information';
import Categories from './categories/categories';
import Map from './map/map';
import RestaurantReviews from './reviews-section/reviews/reviews';

const Restaurant = ({ restaurant }) => {
  return (
    <React.Fragment>
      <Information restaurant={restaurant} />
      <Map restaurant={restaurant} />
      <Categories restaurant={restaurant} />
      <RestaurantReviews restaurant={restaurant}/>
    </React.Fragment>
  );
};

export default Restaurant;
