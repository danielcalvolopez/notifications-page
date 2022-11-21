import { createContext } from "react";
import notifications from "../data/notifications";

const NotificationsInitialState = { notifications: [] };

export const NotificationsContext = createContext(NotificationsInitialState);

const NotificationsContextProvider = ({ children }) => {
  const noti = notifications;

  return (
    <NotificationsContext.Provider value={noti}>
      {children}
    </NotificationsContext.Provider>
  );
};

export default NotificationsContextProvider;
