import { createContext, useState } from "react";
import notifications from "../data/notifications";

const NotificationsInitialState = { notifications: [] };

export const NotificationsContext = createContext(NotificationsInitialState);

const NotificationsContextProvider = ({ children }) => {
  const [AllRead, setAllRead] = useState(false);
  const [noti, setNoti] = useState(notifications);

  return (
    <NotificationsContext.Provider value={noti}>
      {children}
    </NotificationsContext.Provider>
  );
};

export default NotificationsContextProvider;
