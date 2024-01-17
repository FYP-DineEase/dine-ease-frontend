// Icons
import SummarizeIcon from '@mui/icons-material/Summarize';
import EditNoteIcon from '@mui/icons-material/EditNote';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import ReviewsIcon from '@mui/icons-material/Reviews';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import WorkHistoryIcon from '@mui/icons-material/WorkHistory';
import LocalPoliceIcon from '@mui/icons-material/LocalPolice';
import ImageIcon from '@mui/icons-material/Image';

export const NAV_HEIGHT = 85;
export const DASHBOARD_DRAWER_FULLWIDTH = 350;
export const DASHBOARD_DRAWER_RESPONSIVEWIDTH = 70;

export const cuisineTypes = ['Mexican', 'Italian', 'Chinese', 'Fast Food', 'Sea Food'];

export const listingSteps = ['Restaurant Legalities', 'Restaurant Location', 'Restaurant Details'];

export const fileSizeAllowed = 1024;

export const allowedImageTypes = ['image/png', 'image/jpeg', 'image/jpg'];

export const sortBy = {
  rating: 'Top Rated',
  reviewsCount: 'Most Reviewed',
  recommended: 'Recommended',
};

export const UserStorage = {
  AVATAR: 'avatar',
  COVER: 'cover',
};

export const MapZoomLevels = {
  MAX_ZOOM_HEAT_MAP: 14,
  MAP_MIN_ZOOM: 10,
  MAP_ZOOM: 13,
};

export const MenuCategory = {
  APPETIZER: {
    text: 'Appetizer',
    category: 'appetizer',
  },
  MAIN_COURSE: {
    text: 'Main Course',
    category: 'main_course',
  },
  DESSERT: {
    text: 'Dessert',
    category: 'dessert',
  },
};

export const dashboardLinks = [
  {
    id: 'overview',
    text: 'Overview',
    icon: <SummarizeIcon />,
  },
  {
    id: 'edit-details',
    text: 'Edit Details',
    icon: <EditNoteIcon />,
  },
  {
    id: 'feature-history',
    text: 'Feature History',
    hide: true,
    icon: <MonetizationOnIcon />,
  },
  {
    id: 'reviews',
    text: 'Reviews',
    hide: true,
    icon: <ReviewsIcon />,
  },
  {
    id: 'menu',
    text: 'Menu',
    hide: true,
    icon: <MenuBookIcon />,
  },
  {
    id: 'logs',
    text: 'Logs',
    icon: <WorkHistoryIcon />,
  },
  {
    id: 'badges',
    text: 'Badges',
    hide: true,
    icon: <LocalPoliceIcon />,
  },
  {
    id: 'restaurant-images',
    text: 'Images',
    hide: true,
    icon: <ImageIcon />,
  },
];
