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
    </React.Fragment>
  );
};

export default Restaurant;
