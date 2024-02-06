import React, { useEffect, useState } from 'react';

import DataTable from 'react-data-table-component';

//Styles
import { DashboardContent, FlexContainer } from '@/components/UI';
import { Avatar, IconButton, Tooltip } from '@mui/material';

//Icons
import PersonIcon from '@mui/icons-material/Person';
import StarIcon from '@mui/icons-material/Star';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import VisibilityIcon from '@mui/icons-material/Visibility';

import userImage from '@/public/assets/images/avatar.jpg';

import { reviews } from '@/mockData/mockData';

const RecentReviews = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const columns = [
    {
      name: (
        <FlexContainer gap={0.5}>
          <PersonIcon color="primary" />
          Name
        </FlexContainer>
      ),
      selector: (row) => (
        <FlexContainer>
          <Avatar
            src={row.avatar.src}
            alt="user-avatar"
            sx={{ mr: 1.25, height: 35, width: 35 }}
          />
          {row.name}
        </FlexContainer>
      ),
      sortable: 'true',
    },
    {
      name: (
        <FlexContainer gap={0.5}>
          <StarIcon color="primary" />
          Rating
        </FlexContainer>
      ),
      selector: (row) => row.rating,
      sortable: 'true',
      center: 'true',
    },
    {
      name: (
        <FlexContainer gap={0.5}>
          <CalendarMonthIcon color="primary" />
          Posted On
        </FlexContainer>
      ),
      selector: (row) => row.createdAt,
      sortable: 'true',
      center: 'true',
    },
    {
      selector: (row) => (
        <Tooltip title="Show Review" placement="top">
          <IconButton>{row.icon}</IconButton>
        </Tooltip>
      ),
      center: 'true',
    },
  ];

  useEffect(() => {
    setLoading(true);
    const data = reviews.map((review) => ({
      name: review.username,
      rating: review.rating,
      createdAt: review.createdAt,
      icon: <VisibilityIcon />,
      avatar: userImage,
    }));
    setData(data);
    setLoading(false);
  }, []);

  return (
    <DashboardContent>
      <DataTable
        columns={columns}
        data={data}
        responsive
        title="Recent Reviews"
        pagination
        paginationPerPage={5}
        paginationRowsPerPageOptions={[5]}
        progressPending={loading}
      />
    </DashboardContent>
  );
};

export default RecentReviews;
