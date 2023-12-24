import React, { useEffect, useState } from 'react';
import Image from 'next/image';

// Styles
import * as Styles from './listed-restaurants.styles';
import { FlexContainer, InputField, Text } from '@/components/UI';
import { Box, Chip, Divider, InputAdornment, Pagination } from '@mui/material';

// Icons
import LocationIcon from '@mui/icons-material/LocationOn';
import CallIcon from '@mui/icons-material/Call';
import Search from '@mui/icons-material/Search';

// Drawer
import FilterDrawer from '../search-filters-drawer/drawer';

// Utils
import { connectToMeilisearch } from '@/services/meilisearch';

import userImage from '@/public/assets/images/avatar.jpg';

const client = connectToMeilisearch();

const ListedRestaurants = ({ restaurants }) => {
  const [filterText, setFilterText] = useState('');
  const [filteredRestaurants, setFilteredRestaurants] = useState(restaurants);

  useEffect(() => {
    client
      .index('restaurants')
      .search(filterText)
      .then((res) => setFilteredRestaurants(res.hits));
  }, [filterText]);

  return (
    <Styles.SearchContainer>
      <FlexContainer sx={{ justifyContent: 'space-between', gap: 8 }}>
        <FilterDrawer />
        <InputField
          name="search"
          label="Search"
          variant="outlined"
          placeholder="Search Restaurants, Cuisines, Food"
          onChange={(event) => setFilterText(event.target.value)}
          value={filterText}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <Search />
              </InputAdornment>
            ),
          }}
          sx={{ maxWidth: '350px', mb: 2, mr: 2 }}
        />
      </FlexContainer>
      <Box mb={1}>
        <Text variant="subHeader" fontWeight={800}>
          Search Results for
        </Text>
      </Box>
      <Styles.ListContainer>
        {filteredRestaurants.map((restaurant) => (
          <React.Fragment key={restaurant.name}>
            <Styles.RestaurantContainer>
              <Styles.RestaurantImage>
                <Image
                  src={userImage}
                  alt="restaurant"
                  fill
                  sizes="100vw"
                  style={{ objectFit: 'cover', borderRadius: '5px' }}
                />
              </Styles.RestaurantImage>
              <Styles.RestaurantContent>
                <FlexContainer sx={{ justifyContent: 'space-between', mb: 1 }}>
                  <Text variant="main" fontWeight={800}>
                    {restaurant.name}
                  </Text>
                  <Box>
                    <Box>4</Box>
                    <Box>
                      <Text variant="sub">3.2 (100 reviews)</Text>
                    </Box>
                  </Box>
                </FlexContainer>
                <Styles.Cuisines>
                  {restaurant.cuisine.map((cuisineType) => (
                    <Chip
                      key={cuisineType}
                      label={cuisineType}
                      sx={{ color: 'text.secondary' }}
                    />
                  ))}
                </Styles.Cuisines>
                <Styles.IconContainer>
                  <LocationIcon color="primary" />
                  <Text variant="body">123, Main Street, Near Heaven, abcdefg</Text>
                </Styles.IconContainer>
                <Styles.IconContainer>
                  <CallIcon color="primary" />
                  <Text variant="body">03043030210</Text>
                </Styles.IconContainer>
              </Styles.RestaurantContent>
            </Styles.RestaurantContainer>
            <Divider />
          </React.Fragment>
        ))}
      </Styles.ListContainer>
      <FlexContainer>
        <Pagination
          color="primary"
          count={10}
          variant="outlined"
          shape="rounded"
          sx={{
            mt: 3,
            mb: 3,
            '& .MuiPaginationItem-root:not(.Mui-selected)': {
              color: 'text.secondary',
            },
          }}
          //   onChange={pageHandler}
        />
      </FlexContainer>
    </Styles.SearchContainer>
  );
};

export default ListedRestaurants;
