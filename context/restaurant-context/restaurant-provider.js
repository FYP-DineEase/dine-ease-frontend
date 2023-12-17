import React, { useState } from 'react';
import RestaurantContext from './restaurant-context';

const RestaurantContextProvider = ({ children }) => {
  const name = 'Kababjees Restaurant';
  const id = '12134nsfnfe32itr';

  const [restaurantName, setRestaurantName] = useState(name);
  const [restaurantId, setRestaurantId] = useState(id);

  const restaurantNameHandler = (name) => {
    setRestaurantName(name);
  };

  const restaurantIdHandler = (id) => {
    setRestaurantId(id);
  };

  const restaurantContext = {
    restaurantName: restaurantName,
    restaurantId: restaurantId,
    restaurantNameHandler: restaurantNameHandler,
    restaurantIdHandler: restaurantIdHandler,
  };

  return (
    <RestaurantContext.Provider value={restaurantContext}>
      {children}
    </RestaurantContext.Provider>
  );
};

export default RestaurantContextProvider;
