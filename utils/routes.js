export const routes = {
  '/login': {
    requiredAuth: false,
  },
  '/dashboard': {
    requiredAuth: true,
  },
};
