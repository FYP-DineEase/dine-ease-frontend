import React, { useEffect, useMemo, useState } from 'react';

import DataTable from 'react-data-table-component';

//Styles
import { DashboardContent, FlexContainer, InputField } from '@/components/UI';
import { Avatar, IconButton, InputAdornment, Tooltip } from '@mui/material';

//Icons
import PersonIcon from '@mui/icons-material/Person';
import StarIcon from '@mui/icons-material/Star';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { Search } from '@mui/icons-material';

import userImage from '@/public/assets/images/avatar.jpg';

import { reviews } from '@/mockData/mockData';

const ReviewsTable = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const [filterText, setFilterText] = useState('');

  const filteredReviews = data.filter(
    (item) =>
      item.fullName.toLowerCase().includes(filterText.toLowerCase()) ||
      item.createdAt.toLowerCase().includes(filterText.toLowerCase())
  );

  const subHeaderComponentMemo = useMemo(() => {
    return (
      <InputField
        name="search"
        label="Search"
        variant="outlined"
        placeholder="Search Reviews"
        onChange={(event) => setFilterText(event.target.value)}
        value={filterText}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <Search />
            </InputAdornment>
          ),
        }}
        sx={{ maxWidth: '300px' }}
      />
    );
  }, [filterText]);

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
          {row.fullName}
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
      fullName: review.username,
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
        data={filteredReviews}
        responsive
        subHeader
        subHeaderComponent={subHeaderComponentMemo}
        pagination
        paginationPerPage={8}
        paginationRowsPerPageOptions={[8]}
        progressPending={loading}
      />
    </DashboardContent>
  );
};

export default ReviewsTable;
