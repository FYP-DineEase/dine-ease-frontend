import React from 'react';

// Components
import Information from './information/information';
import Categories from './categories/categories';
import Map from './map/map';

const Restaurant = ({ restaurant }) => {
  return (
    <React.Fragment>
      <Information restaurant={restaurant} />
      <Map restaurant={restaurant} />
      <Categories restaurant={restaurant} />
      <h1>Reviews</h1>
    </React.Fragment>
  );
};

export default Restaurant;
