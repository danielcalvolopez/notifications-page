import { createContext, useState } from "react";

export const NotificationsContext = createContext();

const NotificationsContextProvider = ({ children }) => {
  const [read, setRead] = useState(false);

  return (
    <NotificationsContext.Provider>{children}</NotificationsContext.Provider>
  );
};

export default NotificationsContextProvider;
