import classes from "./Notification.module.css";

const Notification = ({ avatar, name, description, content, time }) => {
  return (
    <div className={classes.notification}>
      <img src={avatar} alt="mark" />
      <div>
        <div className={classes["notification-content"]}>
          <div>
            <p className={classes.name}>{name}</p>
            <p className={classes.description}>{description}</p>
            <p className={classes.content}>{content}</p>
            <span></span>
          </div>
        </div>
        <p className={classes["notification-time"]}>{time}</p>
      </div>
    </div>
  );
};

export default Notification;
