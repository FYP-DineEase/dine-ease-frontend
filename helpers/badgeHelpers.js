import dayjs from 'dayjs';

// Icons
import Filter1TwoToneIcon from '@mui/icons-material/Filter1TwoTone';
import Filter3TwoToneIcon from '@mui/icons-material/Filter3TwoTone';
import Filter5TwoToneIcon from '@mui/icons-material/Filter5TwoTone';

export const getBadge = (joinDate, size) => {
  const userJoinDate = dayjs(joinDate);
  const currentDate = dayjs();
  const yearsSinceJoin = currentDate.diff(userJoinDate, 'year');

  switch (true) {
    case yearsSinceJoin >= 5:
      return <Filter5TwoToneIcon fontSize={size} sx={{ color: 'purple' }} />;
    case yearsSinceJoin >= 3:
      return <Filter3TwoToneIcon fontSize={size} color="error" />;
    case yearsSinceJoin >= 1:
      return <Filter1TwoToneIcon fontSize={size} color="primary" />;
  }
};

export const getBadgeTitle = (joinDate) => {
  const userJoinDate = dayjs(joinDate);
  const currentDate = dayjs();
  const yearsSinceJoin = currentDate.diff(userJoinDate, 'year');

  switch (true) {
    case yearsSinceJoin >= 5:
      return "Member from 5+ Years";
    case yearsSinceJoin >= 3:
      return "Member from 3+ Years";
    case yearsSinceJoin >= 1:
      return "Member from 1+ Years";
  }
};
