import React, { useState } from 'react';

// Styles
import { Grid } from '@mui/material';

// Components
import ListedRestaurants from './listed-restaurants/listed-restaurants';
import Map from './map/map';

const SearchRestaurant = ({ restaurants }) => {
  const [hoverId, setHoverId] = useState(null);

  const hoverIdHandler = (value) => {
    if (value === hoverId) return;
    // setHoverId(value);
  };

  const resetHoverIdHandler = () => {
    setHoverId(null);
  };

  return (
    <Grid container justifyContent="center">
      <Grid item xs={12} lg={7}>
        <ListedRestaurants
          restaurants={restaurants}
          hoverIdHandler={hoverIdHandler}
          resetHoverIdHandler={resetHoverIdHandler}
        />
      </Grid>
      <Grid item xs={0} lg={5}>
        <Map restaurants={restaurants} hoverId={hoverId} />
      </Grid>
    </Grid>
  );
};

export default SearchRestaurant;
