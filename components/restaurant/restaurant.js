import React from 'react';

// Components
import Information from './information/information';
import DetailsCard from './map/details-card/details-card';
import Categories from './categories/categories';

const Restaurant = () => {
  return (
    <React.Fragment>
      <Information />
      {/* <DetailsCard /> */}
      <Categories />
    </React.Fragment>
  );
};

export default Restaurant;
