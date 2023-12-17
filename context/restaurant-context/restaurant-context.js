import React from 'react';

const RestaurantContext = React.createContext({
  restaurantName: null,
  restaurantId: null,
  restaurantNameHandler: (name) => {},
  restaurantIdHandler: (id) => {},
});

export default RestaurantContext;
