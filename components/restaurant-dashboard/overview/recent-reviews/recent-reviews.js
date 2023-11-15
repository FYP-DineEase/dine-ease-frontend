import React from 'react';

//Styles
import { DashboardContent, FlexContainer } from '@/components/UI';
import { Avatar } from '@mui/material';
import { Home } from '@mui/icons-material';

import DataTable from 'react-data-table-component';
import userImage from '@/public/assets/images/avatar.jpg';

import { reviews } from '@/mockData/mockData';

const RecentReviews = () => {
  const columns = [
    {
      name: 'Name',
      selector: (row) => (
        <FlexContainer>
          <Avatar src={row.avatar} style={{ marginRight: '8px' }} />
          {row.fullName}
        </FlexContainer>
      ),
      sortable: true,
    },
    {
      name: 'Rating',
      selector: (row) => row.rating,
      sortable: true,
      center: true,
      title: (
        <div>
          <Home /> Rating
        </div>
      ),
    },
    {
      name: 'Posted On',
      selector: (row) => row.createdAt,
      sortable: true,
      center: true,
    },
    {
      name: 'Action',
      selector: (row) => row.icon,
      center: true,
    },
  ];

  const data = reviews.map((review) => ({
    fullName: review.username,
    rating: review.rating,
    createdAt: review.createdAt,
    icon: <Home />,
    avatar: userImage,
  }));

  return (
    <DashboardContent>
      <DataTable
        columns={columns}
        data={data}
        responsive
        title="Recent Reviews"
        // pagination
        // paginationPerPage={5}
        // paginationRowsPerPageOptions={[5]}
      />
    </DashboardContent>
  );
};

export default RecentReviews;
