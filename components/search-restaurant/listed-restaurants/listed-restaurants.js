import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

// Styles
import * as Styles from './listed-restaurants.styles';
import { FlexContainer, InputField, Text } from '@/components/UI';
import { Box, Chip, Divider, InputAdornment, Pagination, Rating } from '@mui/material';

// Icons
import LocationIcon from '@mui/icons-material/LocationOn';
import CallIcon from '@mui/icons-material/Call';
import Search from '@mui/icons-material/Search';

// Utils
import { connectToMeilisearch } from '@/services/meilisearch';

// Components
import FilterDrawer from '../search-filters-drawer/drawer';
import SearchFilters from '../search-filters/search-filters';

import userImage from '@/public/assets/images/avatar.jpg';

const client = connectToMeilisearch();

const ListedRestaurants = ({ restaurants, hoverIdHandler, resetHoverIdHandler }) => {
  const [filterText, setFilterText] = useState('');
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [filteredCategories, setFilteredCategories] = useState([]);
  const [selectedSortType, setSelectedSortType] = useState(null);
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);
  const searchLimit = useRef(10);

  const categorySelectionHandler = (category) => {
    setSelectedCategories((prevSelected) => {
      if (prevSelected.includes(category)) {
        return prevSelected.filter((prevCategory) => prevCategory !== category);
      } else {
        return [...prevSelected, category];
      }
    });
  };

  const sortTypeHandler = (type) => {
    setSelectedSortType(type);
  };

  useEffect(() => {
    const categories = selectedCategories.map((category) => [
      `categories = "${category}"`,
    ]);
    setFilteredCategories(categories);
  }, [selectedCategories]);

  useEffect(() => {
    client
      .index('restaurants')
      .search(filterText, {
        filter: filteredCategories,
        sort: selectedSortType && [`${selectedSortType}:desc`],
        hitsPerPage: searchLimit.current,
        page: page,
      })
      .then((res) => {
        setFilteredRestaurants(res.hits);
        setTotalPage(res.totalPages);
        console.log(res);
      })
      .catch((error) => console.error('MeiliSearch Error:', error));
  }, [filterText, filteredCategories, selectedSortType, page]);

  const pageHandler = (event, newPage) => {
    setPage(newPage);
  };

  return (
    <Styles.SearchContainer>
      <SearchFilters
        sortTypeHandler={sortTypeHandler}
        categorySelectionHandler={categorySelectionHandler}
        selectedCategories={selectedCategories}
        selectedSortType={selectedSortType}
      />
      <Styles.Search>
        <FlexContainer sx={{ justifyContent: 'space-between', gap: 8 }}>
          <FilterDrawer
            sortTypeHandler={sortTypeHandler}
            categorySelectionHandler={categorySelectionHandler}
            selectedCategories={selectedCategories}
            selectedSortType={selectedSortType}
          />
          <InputField
            name="search"
            label="Search"
            variant="outlined"
            placeholder="Search Restaurants, Categories, Food"
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
            <React.Fragment key={restaurant.id}>
              <Styles.RestaurantContainer
                onMouseEnter={() => hoverIdHandler(restaurant.id)}
                onMouseLeave={resetHoverIdHandler}
              >
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
                      <Rating
                        value={restaurant.rating}
                        precision={0.5}
                        size="small"
                        readOnly
                      />
                      <Text variant="sub" sx={{ display: 'block' }}>
                        {restaurant.rating}({restaurant.count} reviews)
                      </Text>
                    </Box>
                  </FlexContainer>
                  <Styles.Cuisines>
                    {restaurant.categories.map((categoryType) => (
                      <Chip
                        key={categoryType}
                        label={categoryType}
                        sx={{ color: 'text.secondary' }}
                      />
                    ))}
                  </Styles.Cuisines>
                  <Styles.IconContainer>
                    <LocationIcon color="primary" />
                    <Text variant="sub">{restaurant.address}</Text>
                  </Styles.IconContainer>
                  <Styles.IconContainer>
                    <CallIcon color="primary" />
                    <Text variant="sub">
                      {restaurant.isVerified ? `+${restaurant.phoneNumber}` : 'No Number'}
                    </Text>
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
            count={totalPage}
            variant="outlined"
            shape="rounded"
            sx={{
              mt: 3,
              mb: 3,
              '& .MuiPaginationItem-root:not(.Mui-selected)': {
                color: 'text.secondary',
              },
            }}
            page={page}
            onChange={pageHandler}
          />
        </FlexContainer>
      </Styles.Search>
    </Styles.SearchContainer>
  );
};

export default ListedRestaurants;
