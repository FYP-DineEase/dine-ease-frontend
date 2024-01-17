import React, { useRef, useState } from 'react';
import Image from 'next/image';

// Styles
import * as Styles from './categories.styles';
import { SectionContainer, Text } from '@/components/UI';
import { Grid, useMediaQuery } from '@mui/material';

// Component
import Menu from '../menu/menu';

import menuData from '@/mockData/menu';

const Categories = () => {
  const [value, setValue] = useState(0);
  const [items, setItems] = useState(menuData.Appetizer);
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down('md'));
  const scroll = useRef(null);

  const executeScroll = () => scroll.current.scrollIntoView();

  const handleChange = (event, newValue) => {
    setValue(newValue);
    executeScroll();
  };

  const itemChangeHandler = (menuItems) => {
    setItems(menuItems);
  };

  return (
    <SectionContainer
      container
      columnSpacing={!isMobile ? 3 : 0}
      rowSpacing={isMobile ? 4 : 0}
    >
      <Grid item xs={12}>
        <Styles.Header>
          <Text variant="subHeader" color="primary" fontWeight={500}>
            Customer Favorites
          </Text>
          <Text variant="header" fontWeight={800}>
            Popular Categories
          </Text>
        </Styles.Header>
      </Grid>
      {Object.entries(menuData).map(([key, value], index) => (
        <Grid item xs={12} md={3} key={key}>
          <Styles.Card
            onClick={() => {
              handleChange(null, index);
              itemChangeHandler(value);
            }}
          >
            <Styles.ImageContainer>
              <Image
                src={'/assets/images/restaurant/menu-image.png'}
                alt="menu-category"
                height={80}
                width={80}
              />
            </Styles.ImageContainer>
            <Text variant="subHeader" fontWeight={500}>
              {key}
            </Text>
            <Text variant="body">({value.length} items)</Text>
          </Styles.Card>
        </Grid>
      ))}
      <Grid item xs={12} mt={8} ref={scroll}>
        <Menu
          value={value}
          handleChange={handleChange}
          itemChangeHandler={itemChangeHandler}
          items={items}
        />
      </Grid>
    </SectionContainer>
  );
};

export default Categories;
