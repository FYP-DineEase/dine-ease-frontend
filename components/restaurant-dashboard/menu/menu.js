import React, { useState } from 'react';

//Styles
import { Grid, Accordion, AccordionSummary, IconButton, Box } from '@mui/material';
import { DashboardContainer, DashboardContent, Text } from '@/components/UI';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import MenuItems from './menu-items/menu-items';
import menuData from '@/mockData/menu';

const Menu = () => {
  const [open, setOpen] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setOpen(isExpanded ? panel : false);
  };

  return (
    <DashboardContainer container columnSpacing={2} rowGap={1}>
      <Grid item xs={12}>
        <DashboardContent>
          <Box mb={3}>
            <Text variant="subHeader" fontWeight={500}>
              Restaurant Menu
            </Text>
          </Box>
          {Object.entries(menuData).map(([key, value]) => (
            <Accordion key={key} expanded={open === key} onChange={handleChange(key)}>
              <AccordionSummary
                expandIcon={
                  <IconButton>
                    <ExpandMoreIcon />
                  </IconButton>
                }
              >
                <Text variant="subHeader" color="text.secondary" fontWeight={500}>
                  {key}
                </Text>
              </AccordionSummary>
              <MenuItems key={key} value={value} />
            </Accordion>
          ))}
        </DashboardContent>
      </Grid>
    </DashboardContainer>
  );
};

export default Menu;
