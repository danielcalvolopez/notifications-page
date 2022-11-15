import MarkAvatar from "./../avatars/avatar-mark-webber.webp";
import classes from "./Notification.module.css";

const Notification = () => {
  return (
    <div className={classes.notification}>
      <img src={MarkAvatar} alt="mark" />
      <div>
        <div className={classes["notification-content"]}>
          <div>
            <p className={classes.name}>Mark Webber</p>
            <p className={classes.description}>reacted to your recent post</p>
            <p className={classes.content}>My first tournament today!</p>
          </div>
          <span></span>
        </div>
        <p className={classes["notification-time"]}>1m ago</p>
      </div>
    </div>
  );
};

export default Notification;
