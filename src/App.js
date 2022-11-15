import NotificationsList from "./components/NotificationsList";
import classes from "./App.module.css";

const App = () => {
  return (
    <div className={classes.background}>
      <div className={classes.container}>
        <div className={classes["notifications-header"]}>
          <div className={classes.title}>
            <h2>Notifications</h2>
            <h3>3</h3>
          </div>
          <h4>Mark all as read</h4>
        </div>
        <NotificationsList />
      </div>
    </div>
  );
};

export default App;
