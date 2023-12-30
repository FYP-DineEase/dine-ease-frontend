import React, { useState } from 'react';

// Styles
import {
  Box,
  Drawer,
  FormControlLabel,
  FormGroup,
  IconButton,
  InputAdornment,
  List,
  ListItem,
  ListItemButton,
  Radio,
  RadioGroup,
} from '@mui/material';
import { CustomCheckbox, InputField, Text } from '@/components/UI';

//Icons
import Search from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';

// Utils
import { cuisineTypes, sortBy } from '@/utils/constants';

const FilterDrawer = ({
  sortTypeHandler,
  cuisineSelectionHandler,
  selectedCuisines,
  selectedSortType,
}) => {
  const [showDrawer, setShowDrawer] = useState(false);
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

  const handleNavDrawer = () => {
    setShowDrawer((prevState) => !prevState);
  };
  return (
    <React.Fragment>
      <IconButton onClick={handleNavDrawer} sx={{ display: { xs: 'block', md: 'none' } }}>
        <MenuIcon color="primary" sx={{ fontSize: 25 }} />
      </IconButton>
      <Drawer
        sx={{ '& .MuiDrawer-paper': { width: '275px' } }}
        open={showDrawer}
        onClose={handleNavDrawer}
      >
        <List sx={{ mt: 5 }} disablePadding>
          <ListItem sx={{ pt: 0, pb: 0 }}>
            <Box>
              <Box pl={2}>
                <Text variant="subHeader" fontWeight={500} color="text.secondary">
                  Sort By
                </Text>
              </Box>
              <RadioGroup sx={{ mb: 2, mt: 2 }}>
                {Object.entries(sortBy).map(([key, value]) => (
                  <ListItemButton sx={{ pl: 2, pt: 0, pb: 0 }} key={key}>
                    <FormControlLabel
                      value={key}
                      color="text.secondary"
                      control={
                        <Radio
                          size="small"
                          checked={selectedSortType === key}
                          onChange={() => sortChangeHandler(key)}
                        />
                      }
                      sx={{
                        '& .MuiFormControlLabel-label': {
                          color: 'text.secondary',
                        },
                      }}
                      label={value}
                    />
                  </ListItemButton>
                ))}
              </RadioGroup>
            </Box>
          </ListItem>
        </List>
        <List disablePadding>
          <ListItem sx={{ pt: 0, pb: 0 }}>
            <Box>
              <Box pl={2}>
                <Text variant="subHeader" fontWeight={500} color="text.secondary">
                  Cuisines
                </Text>
              </Box>
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
                sx={{ mb: 1, mt: 2 }}
              />
              {filteredCuisines.map((cuisine, index) => (
                <ListItemButton sx={{ pl: 2, pt: 0, pb: 0 }} key={cuisine}>
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
                      sx={{
                        '& .MuiFormControlLabel-label': {
                          color: 'text.secondary',
                        },
                      }}
                    />
                  </FormGroup>
                </ListItemButton>
              ))}
            </Box>
          </ListItem>
        </List>
      </Drawer>
    </React.Fragment>
  );
};

export default FilterDrawer;
