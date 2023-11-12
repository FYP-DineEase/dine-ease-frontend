// Icons
import PersonIcon from '@mui/icons-material/Person';
import ManagerIcon from '@mui/icons-material/Restaurant';
import AdminIcon from '@mui/icons-material/LocalPolice';

export const UserRoles = {
  USER: {
    value: 'User',
    icon: <PersonIcon />,
  },
  MANAGER: {
    value: 'Manager',
    icon: <ManagerIcon />,
  },
};

export const AdminRole = {
  ADMIN: {
    value: 'Admin',
    icon: <AdminIcon />,
  },
};

export const AllRoles = {
  ...UserRoles,
  ...AdminRole,
};
