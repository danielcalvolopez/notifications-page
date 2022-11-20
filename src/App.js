import NotificationsList from "./components/NotificationsList";
import classes from "./App.module.css";
import { useContext, useState } from "react";
import { NotificationsContext } from "./context/NotificationsContext";

const App = () => {
  const notiCtx = useContext(NotificationsContext);
  const [read, setRead] = useState(false);

  return (
    <div className={classes.background}>
      <div className={classes.container}>
        <div className={classes["notifications-header"]}>
          <div className={classes.title}>
            <h2>Notifications</h2>
            <h3>7</h3>
          </div>
          <h4 onClick={() => {}}>Mark all as read</h4>
        </div>
        <NotificationsList />
      </div>
    </div>
  );
};

export default App;
