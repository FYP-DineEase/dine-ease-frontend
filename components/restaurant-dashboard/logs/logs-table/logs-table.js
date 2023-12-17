import React, { useEffect, useMemo, useState } from 'react';

import DataTable from 'react-data-table-component';

//Styles
import { DashboardContent, FlexContainer, InputField } from '@/components/UI';
import { InputAdornment } from '@mui/material';

//Icons
import PersonIcon from '@mui/icons-material/Person';
import StarIcon from '@mui/icons-material/Star';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { Search } from '@mui/icons-material';

import { logs } from '@/mockData/mockData';

const LogsTable = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const [filterText, setFilterText] = useState('');

  const filteredLogs = data.filter(
    (item) =>
      item.name.toLowerCase().includes(filterText.toLowerCase()) ||
      item.requestType.toLowerCase().includes(filterText.toLowerCase()) ||
      item.status.toLowerCase().includes(filterText.toLowerCase()) ||
      item.remarks.toString().includes(filterText)
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
          Restaurant Name
        </FlexContainer>
      ),
      selector: (row) => row.name,
      sortable: 'true',
    },
    {
      name: (
        <FlexContainer gap={0.5}>
          <StarIcon color="primary" />
          Request Type
        </FlexContainer>
      ),
      selector: (row) => row.requestType,
      sortable: 'true',
      center: 'true',
    },
    {
      name: (
        <FlexContainer gap={0.5}>
          <CalendarMonthIcon color="primary" />
          Status
        </FlexContainer>
      ),
      selector: (row) => row.status,
      sortable: 'true',
      center: 'true',
    },
    {
      name: (
        <FlexContainer gap={0.5}>
          <CalendarMonthIcon color="primary" />
          Remarks
        </FlexContainer>
      ),
      selector: (row) => row.remarks,
      center: 'true',
    },
  ];

  useEffect(() => {
    setLoading(true);
    const data = logs.map((log) => ({
      name: log.name,
      requestType: log.requestType,
      status: log.status,
      remarks: log.remarks,
    }));
    setData(data);
    setLoading(false);
  }, []);

  return (
    <DashboardContent>
      <DataTable
        columns={columns}
        data={filteredLogs}
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

export default LogsTable;
