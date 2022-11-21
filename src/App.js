import NotificationsList from "./components/NotificationsList";
import classes from "./App.module.css";
import { useContext, useState } from "react";
import { NotificationsContext } from "./context/NotificationsContext";

const App = () => {
  const notiCtx = useContext(NotificationsContext);
  const [notifications, setNotifications] = useState(notiCtx);
  const [read, setRead] = useState(false);

  const handleMarkAllAsRead = () => {
    setNotifications(
      notiCtx.map((noti) => (noti.read = true)(setRead(noti.read)))
    );
  };

  return (
    <div className={classes.background}>
      <div className={classes.container}>
        <div className={classes["notifications-header"]}>
          <div className={classes.title}>
            <h2>Notifications</h2>
            <h3>{notifications.length}</h3>
          </div>
          <h4 onClick={handleMarkAllAsRead}>Mark all as read</h4>
        </div>
        <NotificationsList read={read} />
      </div>
    </div>
  );
};

export default App;
