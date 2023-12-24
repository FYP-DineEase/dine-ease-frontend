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
import { cuisineTypes } from '@/utils/constants';

const sortBy = ['Top Rated', 'Most Reviewed', 'Recommended'];

const FilterDrawer = () => {
  const [showDrawer, setShowDrawer] = useState(false);

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
                {sortBy.map((options, index) => (
                  <ListItemButton sx={{ pl: 2, pt: 0, pb: 0 }} key={options}>
                    <FormControlLabel
                      key={index}
                      value={options}
                      color="text.secondary"
                      control={<Radio size="small" />}
                      sx={{
                        '& .MuiFormControlLabel-label': {
                          color: 'text.secondary',
                        },
                      }}
                      label={options}
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
                //   onChange={(event) => setFilterText(event.target.value)}
                //   value={filterText}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <Search />
                    </InputAdornment>
                  ),
                }}
                sx={{ mb: 1, mt: 2 }}
              />
              {cuisineTypes.map((cuisine, index) => (
                <ListItemButton sx={{ pl: 2, pt: 0, pb: 0 }} key={cuisine}>
                  <FormGroup key={index}>
                    <FormControlLabel
                      control={<CustomCheckbox name="agree" />}
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
