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
import { categoryTypes, sortBy } from '@/utils/constants';

const SearchFilters = ({
  sortTypeHandler,
  categorySelectionHandler,
  categoryResetHandler,
  selectedCategories,
  selectedSortType,
}) => {
  const [filterText, setFilterText] = useState('');

  const nonSelectedCategories = categoryTypes.filter(
    (category) => !selectedCategories.includes(category)
  );

  const filteredCategories = nonSelectedCategories.filter((category) =>
    category.toLowerCase().includes(filterText.toLowerCase())
  );

  const categoryChangeHandler = (category) => {
    categorySelectionHandler(category);
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
          Categories
        </Text>
        {selectedCategories.length > 0 && (
          <Styles.ResetText variant="sub" color="primary" onClick={categoryResetHandler}>
            Reset
          </Styles.ResetText>
        )}
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
        <Box sx={{ maxHeight: '60vh', overflowY: 'auto', overflowX: 'hidden' }}>
          {selectedCategories.map((category, index) => (
            <FormGroup key={index}>
              <FormControlLabel
                control={
                  <CustomCheckbox
                    checked={selectedCategories.includes(category)}
                    value={category}
                    onChange={() => categoryChangeHandler(category)}
                  />
                }
                label={category}
              />
            </FormGroup>
          ))}
          {filteredCategories.map((category, index) => (
            <FormGroup key={index}>
              <FormControlLabel
                control={
                  <CustomCheckbox
                    checked={selectedCategories.includes(category)}
                    value={category}
                    onChange={() => categoryChangeHandler(category)}
                  />
                }
                label={category}
              />
            </FormGroup>
          ))}
        </Box>
      </Box>
    </Styles.FilterContainer>
  );
};

export default SearchFilters;
