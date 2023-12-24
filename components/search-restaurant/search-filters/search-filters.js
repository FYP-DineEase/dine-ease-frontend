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
import { cuisineTypes } from '@/utils/constants';

const sortBy = ['Top Rated', 'Most Reviewed', 'Recommended'];

const SearchFilters = () => {
  const [filterText, setFilterText] = useState('');

  const filteredCuisines = cuisineTypes.filter((cuisine) =>
    cuisine.toLowerCase().includes(filterText.toLowerCase())
  );

  return (
    <Styles.FilterContainer>
      <Box>
        <Text variant="main" fontWeight={500}>
          Sort By
        </Text>
        <RadioGroup sx={{ mb: 2, mt: 2 }}>
          {sortBy.map((options, index) => (
            <FormControlLabel
              key={index}
              value={options}
              control={<Radio />}
              label={options}
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
            <FormControlLabel control={<CustomCheckbox name="agree" />} label={cuisine} />
          </FormGroup>
        ))}
      </Box>
    </Styles.FilterContainer>
  );
};

export default SearchFilters;
