import React, { useEffect, useRef, useState } from 'react';
import { ReactSortable } from 'react-sortablejs';
import { useRestaurantContext } from '@/context/restaurant-context';

// Components
import ItemModal from '../item-modal/item-modal';

// Styles
import { Text } from '@/components/UI';
import { AccordionDetails, Box } from '@mui/material';
import * as Styles from './menu-items.styles';

// Icons
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import MenuCard from '../menu-card/menu-card';

const CardWrapper = React.forwardRef((props, ref) => {
  return (
    <Box ref={ref} display="flex" flexWrap="wrap" gap={2}>
      {props.children}
    </Box>
  );
});
CardWrapper.displayName = 'CardWrapper';

const MenuItems = ({ category }) => {
  const { details } = useRestaurantContext();

  const [menu, setMenu] = useState([]);
  const [showItemModal, setShowItemModal] = useState(false);

  const values = useRef({ name: null, description: null, price: null, image: null });

  useEffect(() => {
    setMenu(details.menu.filter((v) => v.category === category));
  }, [details.menu, category]);

  const valuesSubmitHandler = (data) => {
    values.current.name = data.name;
    values.current.description = data.description;
    values.current.price = data.price;
    values.current.image = data.image;
    const newItem = { ...values.current, order: menu.length };
    addMenuItem(newItem);
  };

  const handleSort = (event) => {
    const { oldIndex, newIndex } = event;
    const updatedMenu = [...menu];
    const draggedItemContent = updatedMenu.splice(oldIndex, 1)[0];
    updatedMenu.splice(newIndex, 0, draggedItemContent);

    updatedMenu.forEach((item, index) => {
      item.order = index;
    });

    setMenu(updatedMenu);
  };

  const addMenuItem = (newItem) => {
    setMenu((prevState) => [...prevState, newItem]);
  };

  const deleteMenuItem = (itemIndex) => {
    const updatedMenu = [...menu];
    updatedMenu.splice(itemIndex, 1);
    setMenu(updatedMenu);
  };

  const updateMenuItem = (itemIndex, updatedItem) => {
    const updatedMenu = [...menu];
    updatedMenu[itemIndex] = { ...updatedItem, order: updatedMenu[itemIndex].order };
    setMenu(updatedMenu);
  };

  return (
    <React.Fragment>
      {showItemModal && (
        <ItemModal
          showModal={showItemModal}
          setShowModal={setShowItemModal}
          valuesSubmitHandler={valuesSubmitHandler}
          headerTitle="Add Item"
        />
      )}
      <AccordionDetails>
        <Styles.MenuItemsContainer>
          <ReactSortable
            onEnd={handleSort}
            tag={CardWrapper}
            list={menu}
            setList={setMenu}
            animation={200}
            delayOnTouchStart={true}
            delay={2}
          >
            {menu.map((item, itemIndex) => (
              <MenuCard
                key={itemIndex}
                item={item}
                itemIndex={itemIndex}
                handleDelete={deleteMenuItem}
                handleUpdate={updateMenuItem}
              />
            ))}
          </ReactSortable>
          <Styles.AddItemPlaceholder onClick={() => setShowItemModal(true)}>
            <AddCircleOutlineIcon color="secondary" fontSize="large" />
            <Text variant="subHeader" color="secondary">
              Add Item
            </Text>
          </Styles.AddItemPlaceholder>
        </Styles.MenuItemsContainer>
      </AccordionDetails>
    </React.Fragment>
  );
};

export default MenuItems;
