import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

// Styles
import * as Styles from './categories.styles';
import { SectionContainer, Text } from '@/components/UI';
import { Grid, useMediaQuery } from '@mui/material';

// Component
import Menu from '../menu/menu';

// Utils
import { MenuCategory } from '@/utils/constants';

const Categories = ({ restaurant }) => {
  const [value, setValue] = useState(MenuCategory.APPETIZER.category);
  const [menu, setMenu] = useState([]);

  const isMobile = useMediaQuery((theme) => theme.breakpoints.down('md'));
  const scroll = useRef(null);

  const executeScroll = () => scroll.current.scrollIntoView();

  const handleChange = (newValue) => {
    console.log(newValue);
    setValue(newValue);
    executeScroll();
  };

  useEffect(() => {
    const reducedData = restaurant.menu.reduce((acc, item) => {
      const { category, ...details } = item;

      if (!acc[category]) {
        acc[category] = [];
      }

      acc[category].push(details);
      return acc;
    }, {});
    setMenu(reducedData);
  }, [restaurant]);

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
      {Object.entries(MenuCategory).map(([key, value]) => (
        <Grid item xs={12} md={3} key={key}>
          <Styles.Card onClick={() => handleChange(value.category)}>
            <Styles.ImageContainer>
              <Image
                src={'/assets/images/restaurant/menu-image.png'}
                alt="menu-category"
                height={80}
                width={80}
              />
            </Styles.ImageContainer>
            <Text variant="subHeader" fontWeight={500}>
              {value.text}
            </Text>
            <Text variant="body">({menu[value.category]?.length || 0} items)</Text>
          </Styles.Card>
        </Grid>
      ))}
      <Grid item xs={12} mt={8} ref={scroll}>
        <Menu value={value} handleChange={handleChange} items={menu[value]} />
      </Grid>
    </SectionContainer>
  );
};

export default Categories;
