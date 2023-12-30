import React, { useState } from 'react';

// Styles
import * as Styles from './search-filters.styles';
import {
  Box,
  FormControlLabel,
  FormGroup,
  InputAdornment,
  Radio,
  RadioGroup,
} from '@mui/material';
import { CustomCheckbox, InputField, Text } from '@/components/UI';

// Icons
import Search from '@mui/icons-material/Search';

// Utils
import { cuisineTypes, sortBy } from '@/utils/constants';

const SearchFilters = ({
  sortTypeHandler,
  cuisineSelectionHandler,
  selectedCuisines,
  selectedSortType,
}) => {
  const [filterText, setFilterText] = useState('');

  const filteredCuisines = cuisineTypes.filter((cuisine) =>
    cuisine.toLowerCase().includes(filterText.toLowerCase())
  );

  const cuisineChangeHandler = (cuisine) => {
    cuisineSelectionHandler(cuisine);
  };

  const sortChangeHandler = (sortType) => {
    sortTypeHandler(sortType);
  };

  return (
    <Styles.FilterContainer>
      <Box>
        <Text variant="main" fontWeight={500}>
          Sort By
        </Text>
        <RadioGroup sx={{ mb: 2, mt: 2 }}>
          {Object.entries(sortBy).map(([key, value]) => (
            <FormControlLabel
              key={key}
              value={key}
              control={
                <Radio
                  checked={selectedSortType === key}
                  onChange={() => sortChangeHandler(key)}
                />
              }
              label={value}
            />
          ))}
        </RadioGroup>
      </Box>
      <Box>
        <Text variant="main" fontWeight={500}>
          Cuisines
        </Text>
        <InputField
          name="search"
          label="Search"
          variant="outlined"
          placeholder="Search Reviews"
          onChange={(event) => setFilterText(event.target.value)}
          value={filterText}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <Search />
              </InputAdornment>
            ),
          }}
          sx={{ mb: 2, mt: 2 }}
        />
        {filteredCuisines.map((cuisine, index) => (
          <FormGroup key={index}>
            <FormControlLabel
              control={
                <CustomCheckbox
                  checked={selectedCuisines.includes(cuisine)}
                  value={cuisine}
                  onChange={() => cuisineChangeHandler(cuisine)}
                />
              }
              label={cuisine}
            />
          </FormGroup>
        ))}
      </Box>
    </Styles.FilterContainer>
  );
};

export default SearchFilters;
