import React, { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectUserState } from '@/store/user/userSlice';

// Styles
import { Grid } from '@mui/material';

// Services
import { connectToMeilisearch } from '@/services/meilisearch';

// Components
import ListedRestaurants from './listed-restaurants/listed-restaurants';
import Map from './map/map';

const client = connectToMeilisearch();

const SearchRestaurant = () => {
  const user = useSelector(selectUserState);
  const { coordinates } = user.location;
  const longitude = (coordinates && coordinates[0]) || -82.7333444;
  const latitude = (coordinates && coordinates[1]) || 28.2172884;

  const [filterText, setFilterText] = useState('');
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [filteredCategories, setFilteredCategories] = useState([]);
  const [selectedSortType, setSelectedSortType] = useState(null);

  const [location, setLocation] = useState({
    lng: longitude,
    lat: latitude,
    distanceInMeters: 25000,
  });
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);
  const [hoverId, setHoverId] = useState(null);
  const searchLimit = useRef(10);

  const categoryResetHandler = () => {
    setSelectedCategories([]);
  };

  const sortTypeHandler = (type) => {
    setSelectedSortType(type);
  };

  useEffect(() => {
    const categories = selectedCategories.map((category) => `categories = "${category}"`);
    setFilteredCategories(categories);
  }, [selectedCategories]);

  const pageHandler = (event, newPage) => {
    setPage(newPage);
  };

  const hoverIdHandler = (value) => {
    if (value === hoverId) return;
    setHoverId(value);
  };

  const resetHoverIdHandler = () => {
    setHoverId(null);
  };

  const categorySelectionHandler = (category) => {
    setSelectedCategories((prevSelected) => {
      if (prevSelected.includes(category)) {
        return prevSelected.filter((prevCategory) => prevCategory !== category);
      } else {
        return [...prevSelected, category];
      }
    });
  };

  useEffect(() => {
    client
      .index('restaurants')
      .search(filterText, {
        filter: [
          filteredCategories,
          `_geoRadius(${location.lat}, ${location.lng}, ${location.distanceInMeters})`,
        ],
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
  }, [filterText, filteredCategories, selectedSortType, page, location]);

  useEffect(() => {
    setPage(1);
  }, [filterText]);

  return (
    <Grid container justifyContent="center">
      <Grid item xs={12} lg={7}>
        <ListedRestaurants
          hoverIdHandler={hoverIdHandler}
          resetHoverIdHandler={resetHoverIdHandler}
          categoryResetHandler={categoryResetHandler}
          categorySelectionHandler={categorySelectionHandler}
          selectedCategories={selectedCategories}
          setFilterText={setFilterText}
          filterText={filterText}
          filteredRestaurants={filteredRestaurants}
          selectedSortType={selectedSortType}
          sortTypeHandler={sortTypeHandler}
          pageHandler={pageHandler}
          totalPage={totalPage}
          page={page}
          setLocation={setLocation}
          initialCoordinates={{ lng: longitude, lat: latitude }}
        />
      </Grid>
      <Grid item xs={0} lg={5}>
        <Map restaurants={filteredRestaurants} hoverId={hoverId} location={location} />
      </Grid>
    </Grid>
  );
};

export default SearchRestaurant;
