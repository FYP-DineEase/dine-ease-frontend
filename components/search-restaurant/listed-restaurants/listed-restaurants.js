import React, { useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

// Styles
import * as Styles from './listed-restaurants.styles';
import { FlexContainer, InputField, PrimaryButton, Text } from '@/components/UI';
import {
  Autocomplete,
  Box,
  Chip,
  CircularProgress,
  Divider,
  InputAdornment,
  Pagination,
  Rating,
  createFilterOptions,
} from '@mui/material';

// Icons
import LocationIcon from '@mui/icons-material/LocationOn';
import CallIcon from '@mui/icons-material/Call';
import Search from '@mui/icons-material/Search';
import MyLocationIcon from '@mui/icons-material/MyLocation';

// Helpers
import { getFileUrl } from '@/helpers/fileHelpers';
import { getCoordinates, getSuggestions } from '@/helpers/mapHelpers';

// Components
import FilterDrawer from '../search-filters-drawer/drawer';
import SearchFilters from '../search-filters/search-filters';

const ListedRestaurants = ({
  restaurants,
  hoverIdHandler,
  resetHoverIdHandler,
  sortTypeHandler,
  categorySelectionHandler,
  categoryResetHandler,
  selectedCategories,
  selectedSortType,
  filterText,
  setFilterText,
  filteredRestaurants,
  pageHandler,
  totalPage,
  page,
  setLocation,
  initialCoordinates,
}) => {
  const [open, setOpen] = useState(false);
  const defaultOption = useMemo(
    () => ({
      name: 'My Current Location',
      mapbox_id: 'default',
    }),
    []
  );

  const [searchLocation, setSearchLocation] = useState('');
  const [selectedLocation, setSelectedLocation] = useState(defaultOption);
  const [suggestions, setSuggestions] = useState([]);
  const [loading, setLoading] = useState(false);

  const suggestionChangeHandler = async () => {
    try {
      setLoading(true);
      const response = await getSuggestions(searchLocation);
      setSuggestions(response);
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  };

  const selectedLocationHandler = async (value) => {
    setSelectedLocation(value);
    if (value?.mapbox_id === 'default') {
      setLocation((prevState) => ({
        ...prevState,
        lng: initialCoordinates.lng,
        lat: initialCoordinates.lat,
      }));
    } else if (value) {
      try {
        const response = await getCoordinates(value.mapbox_id);
        const [longitude, latitude] = response;
        setLocation((prevState) => ({ ...prevState, lng: longitude, lat: latitude }));
      } catch (e) {
        console.log(e);
      }
    }
  };

  const _filterOptions = createFilterOptions();

  const filterOptions = (options, state) => {
    const results = _filterOptions(options, state);

    if (!results.includes(defaultOption)) {
      results.unshift(defaultOption);
    }

    return results;
  };

  useEffect(() => {
    if (searchLocation) suggestionChangeHandler();
  }, [searchLocation]);

  return (
    <Styles.SearchContainer>
      <SearchFilters
        sortTypeHandler={sortTypeHandler}
        categorySelectionHandler={categorySelectionHandler}
        categoryResetHandler={categoryResetHandler}
        selectedCategories={selectedCategories}
        selectedSortType={selectedSortType}
      />
      <Styles.Search>
        <FlexContainer sx={{ justifyContent: 'left', mb: 2 }}>
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
            sx={{ maxWidth: '300px' }}
          />
          <Autocomplete
            open={open}
            onOpen={() => {
              setOpen(true);
            }}
            onClose={() => {
              setOpen(false);
            }}
            value={selectedLocation}
            onChange={(e, value) => selectedLocationHandler(value)}
            inputValue={searchLocation}
            onInputChange={(e, value) => setSearchLocation(value)}
            isOptionEqualToValue={(option, value) => option.mapbox_id === value.mapbox_id}
            getOptionLabel={(option) => option.name}
            options={suggestions}
            loading={loading}
            filterOptions={filterOptions}
            ListboxProps={{ style: { maxHeight: 450 } }}
            sx={{ width: '350px' }}
            renderOption={(props, value) => {
              return (
                <Box component="li" {...props} key={value.mapbox_id}>
                  <FlexContainer
                    sx={{
                      flexDirection: 'column',
                      justifyContent: 'left',
                      alignItems: 'flex-start',
                    }}
                  >
                    <FlexContainer gap={1}>
                      {value?.mapbox_id === 'default' && (
                        <MyLocationIcon color="primary" fontSize="small" />
                      )}
                      <Text variant="body" color="text.secondary" fontWeight={600}>
                        {value.name}
                      </Text>
                    </FlexContainer>

                    <Text variant="sub" color="text.ternary">
                      {value.place_formatted}
                    </Text>
                  </FlexContainer>
                </Box>
              );
            }}
            renderInput={(params) => (
              <InputField
                {...params}
                label="Location"
                variant="outlined"
                placeholder="Type any location, place, landmark."
                InputProps={{
                  ...params.InputProps,
                  startAdornment: (
                    <InputAdornment position="end">
                      {selectedLocation?.mapbox_id === 'default' && (
                        <MyLocationIcon color="primary" fontSize="small" />
                      )}
                    </InputAdornment>
                  ),
                  endAdornment: (
                    <React.Fragment>
                      {loading ? <CircularProgress color="inherit" size={20} /> : null}
                      {params.InputProps.endAdornment}
                    </React.Fragment>
                  ),
                }}
              />
            )}
          />
          <PrimaryButton sx={{ height: '55px', borderRadius: 0 }}>
            <Search sx={{ color: 'white' }} />
          </PrimaryButton>
        </FlexContainer>
        {filterText && selectedLocation && (
          <Box mb={1}>
            <Text variant="subHeader">
              Search Results for
              <Text variant="subHeader" fontWeight={500} sx={{ mr: 1, ml: 1 }}>
                {filterText}
              </Text>
              near
              <Text variant="subHeader" fontWeight={500} sx={{ mr: 1, ml: 1 }}>
                {selectedLocation.name}
              </Text>
            </Text>
          </Box>
        )}
        <Styles.ListContainer>
          {filteredRestaurants.map((restaurant) => (
            <Link
              href={`/restaurant/${restaurant.slug}`}
              target="_blank"
              key={restaurant.id}
            >
              <Styles.RestaurantContainer
                onMouseEnter={() => hoverIdHandler(restaurant.id)}
                onMouseLeave={resetHoverIdHandler}
              >
                <Styles.RestaurantImage>
                  <Image
                    src={
                      (restaurant.cover &&
                        getFileUrl(
                          process.env.NEXT_PUBLIC_AWS_S3_RESTAURANTS_BUCKET,
                          `${restaurant.id}/cover/${restaurant.cover}`
                        )) ||
                      '/assets/images/bg-placeholder.png'
                    }
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
                    <FlexContainer sx={{ flexDirection: 'column' }}>
                      <Rating
                        value={restaurant.rating}
                        precision={0.5}
                        size="small"
                        readOnly
                      />
                      <Text variant="sub" sx={{ display: 'block', textAlign: 'center' }}>
                        {restaurant.rating} ({restaurant.count} reviews)
                      </Text>
                    </FlexContainer>
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
            </Link>
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

export default React.memo(ListedRestaurants);
