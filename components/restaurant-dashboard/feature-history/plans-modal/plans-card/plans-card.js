import React from 'react';

// Styles
import * as Styles from './plans-card.styles';
import { Text } from '@/components/UI';

const PlansCard = ({ item, planSelectionHandler, selectedPlan }) => {
  return (
    <Styles.PlanContainer
      selected={+selectedPlan?.id?.includes(item.id) || 0}
      onClick={() => planSelectionHandler(item)}
    >
      <Text
        variant="header"
        sx={{ display: 'block', mb: 2, fontWeight: 500, color: 'text.secondary' }}
      >
        Basic
      </Text>
      <Text variant="body" sx={{ display: 'block', mb: 4, color: 'text.secondary' }}>
        This is just a basic plan with basic features to prioritize restaurant searches
      </Text>
      <Text variant="bigHeader" color="primary" fontWeight={900}>
        ${item.charges}
      </Text>
      <Text variant="body" color="primary" fontWeight={600}>
        /{item.durationInMonths} months
      </Text>
    </Styles.PlanContainer>
  );
};

export default PlansCard;
