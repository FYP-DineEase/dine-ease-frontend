import React, { useState } from 'react';

import { cuisineTypes } from '@/utils/constants';
import {
  Box,
  FormControlLabel,
  FormGroup,
  InputAdornment,
  Radio,
  RadioGroup,
} from '@mui/material';
import { CustomCheckbox, InputField, Text } from '@/components/UI';
import Search from '@mui/icons-material/Search';

const sortBy = ['Top Rated', 'Most Reviewed', 'Recommended'];

const SearchFilters = () => {
  const [filterText, setFilterText] = useState('');

  const filteredCuisines = cuisineTypes.filter((cuisine) =>
    cuisine.toLowerCase().includes(filterText.toLowerCase())
  );

  return (
    <Box p={5}>
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
    </Box>
  );
};

export default SearchFilters;
