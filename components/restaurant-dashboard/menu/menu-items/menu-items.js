import React, { useState } from 'react';

//Styles
import { Text } from '@/components/UI';
import { Accordion, AccordionDetails, AccordionSummary, IconButton } from '@mui/material';
import * as Styles from './menu-items.styles';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import MenuCards from '../menu-cards/menu-cards';

import userImage from '@/public/assets/images/avatar.jpg';

const MenuItems = () => {
  const [open, setOpen] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setOpen(isExpanded ? panel : false);
  };

  const menu = [
    {
      title: 'Appetizer',
      items: [
        {
          name: 'Salad',
          description: 'Very tasty salad consiting of herbs and dont know',
          price: '200Rs',
          image: userImage,
        },
        {
          name: 'Salad',
          description: 'Very tasty salad consiting of herbs and dont know',
          price: '200Rs',
          image: userImage,
        },
        {
          name: 'Salad',
          description: 'Very tasty salad consiting of herbs and dont know ',
          price: '200Rs',
          image: userImage,
        },
      ],
    },
    {
      title: 'Main Course',
      items: [
        {
          name: 'Salad',
          description:
            'Very tasty salad consiting of herbs and dont know what things but is extremely delecious and tasty',
          price: '200Rs',
          image: userImage,
        },
        {
          name: 'Salad',
          description:
            'Very tasty salad consiting of herbs and dont know what things but is extremely delecious and tasty',
          price: '200Rs',
          image: userImage,
        },
        {
          name: 'Salad',
          description:
            'Very tasty salad consiting of herbs and dont know what things but is extremely delecious and tasty',
          price: '200Rs',
          image: userImage,
        },
      ],
    },
    {
      title: 'Beverages',
      items: [
        {
          name: 'Salad',
          description:
            'Very tasty salad consiting of herbs and dont know what things but is extremely delecious and tasty',
          price: '200Rs',
          image: userImage,
        },
        {
          name: 'Salad',
          description:
            'Very tasty salad consiting of herbs and dont know what things but is extremely delecious and tasty',
          price: '200Rs',
          image: userImage,
        },
        {
          name: 'Salad',
          description:
            'Very tasty salad consiting of herbs and dont know what things but is extremely delecious and tasty',
          price: '200Rs',
          image: userImage,
        },
      ],
    },
  ];
  return menu.map((menuItem, index) => (
    <Accordion
      key={menuItem.title}
      expanded={open === `panel${index}`}
      onChange={handleChange(`panel${index}`)}
    >
      <AccordionSummary
        expandIcon={
          <IconButton>
            <ExpandMoreIcon />
          </IconButton>
        }
      >
        <Text variant="subHeader" color="text.secondary" fontWeight={500}>
          {menuItem.title}
        </Text>
      </AccordionSummary>
      <AccordionDetails>
        <Styles.MenuItemsContainer>
          {menuItem.items.map((item, index) => (
            <MenuCards item={item} key={index} />
          ))}
        </Styles.MenuItemsContainer>
      </AccordionDetails>
    </Accordion>
  ));
};

export default MenuItems;
