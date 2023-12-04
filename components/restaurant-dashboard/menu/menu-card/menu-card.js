import React, { useRef, useState } from 'react';
import Image from 'next/image';

//Styles
import * as Styles from './menu-card.styles';
import { Box, Card, CardMedia, IconButton, Tooltip } from '@mui/material';
import { FlexContainer, Text } from '@/components/UI';

//Icons
import Delete from '@mui/icons-material/Delete';
import Edit from '@mui/icons-material/Edit';
import DragIndicatorIcon from '@mui/icons-material/DragIndicator';

//Components
import DeleteModal from '@/components/modal/delete-modal/delete-modal';
import ItemModal from '../item-modal/item-modal';

const MenuCard = ({ item, itemIndex, handleDelete, handleUpdate }) => {
  const { name, description, price, image } = item;

  const values = useRef({ name: null, description: null, price: null, image: null });
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showItemModal, setShowItemModal] = useState(false);

  const handleShowDeleteModal = () => setShowDeleteModal((prevState) => !prevState);
  const handleShowItemModal = () => setShowItemModal((prevState) => !prevState);

  const valuesSubmitHandler = (value) => {
    values.current.name = value.name;
    values.current.description = value.description;
    values.current.price = value.price;
    values.current.image = value.image;
    handleUpdate(itemIndex, values.current);
  };

  return (
    <React.Fragment>
      {showItemModal && (
        <ItemModal
          showModal={showItemModal}
          handleShowModal={handleShowItemModal}
          valuesSubmitHandler={valuesSubmitHandler}
          itemDetails={item}
          headerTitle="Update Item"
        />
      )}
      {showDeleteModal && (
        <DeleteModal
          showModal={showDeleteModal}
          handleCloseModal={handleShowDeleteModal}
          handleDelete={() => handleDelete(itemIndex)}
        />
      )}
      <Card
        sx={{
          width: '220px',
          height: '275px',
          cursor: 'grab',
        }}
      >
        <CardMedia sx={{ height: '130px', position: 'relative' }}>
          <Image
            src={image}
            alt="menu-item"
            sizes="100vw"
            fill
            style={{ objectFit: 'cover' }}
          />
        </CardMedia>
        <Styles.CardContentContainer>
          <FlexContainer sx={{ justifyContent: 'space-between', width: '100%' }}>
            <Text variant="body" color="text.secondary" fontWeight={800}>
              {name}
            </Text>
            <Tooltip title="Draggable Card" placement="top" arrow>
              <IconButton>
                <DragIndicatorIcon fontSize="small" />
              </IconButton>
            </Tooltip>
          </FlexContainer>
          <Text variant="sub" color="text.ternary">
            {description}
          </Text>
          <FlexContainer sx={{ justifyContent: 'space-between', width: '100%' }}>
            <Text variant="body" fontWeight={500} color="text.secondary">
              {price}
            </Text>
            <Box>
              <Tooltip title="Edit Details" placement="top" arrow>
                <IconButton onClick={handleShowItemModal}>
                  <Edit fontSize="small" />
                </IconButton>
              </Tooltip>
              <Tooltip title="Delete Item" placement="top" arrow>
                <IconButton onClick={handleShowDeleteModal}>
                  <Delete fontSize="small" />
                </IconButton>
              </Tooltip>
            </Box>
          </FlexContainer>
        </Styles.CardContentContainer>
      </Card>
    </React.Fragment>
  );
};

export default MenuCard;
