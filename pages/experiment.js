import React, { useState } from "react";

const experiment = () => {
  const initialRestaurants = [
    {
      restaurantName: "Subway",
      tags: ["sandwiches", "bread", "american"],
      menu: {
        appetizers: ["chicken salad", "cookies"],
        sandwiches: ["cheese sandwich", "bbq chicken sandwich"],
      },
    },
    {
      restaurantName: "Pizza Hut",
      tags: ["italian", "pizza", "cheese"],
      menu: {
        pizza: ["creammy chicken tika", "mozarella cheese"],
        drinks: ["pepsi", "mirinda"],
      },
    },
  ];

  const [restaurants, setRestaurants] = useState(initialRestaurants);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (event) => {
    const query = event.target.value.toLowerCase();
    setSearchQuery(query);

    const filteredRestaurants = initialRestaurants.filter((restaurant) => {
      // Check if the restaurant name, tags, or menu items contain the search query
      return (
        restaurant.restaurantName.toLowerCase().includes(query) ||
        restaurant.tags.some((tag) => tag.toLowerCase().includes(query)) ||
        Object.values(restaurant.menu)
          .flat()
          .some((item) => item.toLowerCase().includes(query))
      );
    });

    setRestaurants(filteredRestaurants);
  };

  return (
    <div style={{ margin: "10rem auto", width: "300px" }}>
      <input
        type="text"
        placeholder="search"
        style={{ marginBottom: "3rem" }}
        value={searchQuery}
        onChange={handleSearch}
      />
      {restaurants.map((restaurant, index) => (
        <div key={index}>
          <h2>{restaurant.restaurantName}</h2>
          <p>Tags: {restaurant.tags.join(", ")}</p>
          <h3>Menu:</h3>
          <ul>
            {Object.keys(restaurant.menu).map((category) => (
              <li key={category}>
                <strong>{category}</strong>
                <ul>
                  {restaurant.menu[category].map((item, itemIndex) => (
                    <li key={itemIndex}>{item}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default experiment;
