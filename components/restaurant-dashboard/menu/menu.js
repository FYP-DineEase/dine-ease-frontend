import React, { useState } from 'react';

//Styles
import { Grid, Accordion, AccordionSummary, IconButton } from '@mui/material';
import { DashboardContainer, Text } from '@/components/UI';
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
      </Grid>
    </DashboardContainer>
  );
};

export default Menu;
