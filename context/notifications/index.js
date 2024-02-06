import { createContext } from 'react';
import { io } from 'socket.io-client';

const socket = io('/', { path: '/socket.io/notifications' });
const NotificationContext = createContext(socket);

const NotificationContextProvider = ({ children }) => {
  return (
    <NotificationContext.Provider value={{ socket }}>
      {children}
    </NotificationContext.Provider>
  );
};
export { NotificationContext, NotificationContextProvider };
