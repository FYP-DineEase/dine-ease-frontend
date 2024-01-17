import React from 'react';

// Components
import Information from './information/information';
import DetailsCard from './map/details-card/details-card';
import Categories from './categories/categories';

const Restaurant = ({ restaurant }) => {
  return (
    <React.Fragment>
      <Information restaurant={restaurant} />
      {/* <DetailsCard /> */}
      <Categories />
    </React.Fragment>
  );
};

export default Restaurant;
