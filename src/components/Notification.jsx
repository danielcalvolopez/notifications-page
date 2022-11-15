import classes from "./Notification.module.css";

const Notification = ({
  avatar,
  name,
  description,
  content,
  time,
  picture,
  message,
  contentclub,
}) => {
  return (
    <>
      <div className={classes.notification}>
        <div className={classes.wrapper}>
          <img className={classes.avatar} src={avatar} alt="mark" />
          <div>
            <div className={classes["notification-content"]}>
              <div>
                <p className={classes.name}>{name}</p>
                <p className={classes.description}>{description}</p>
                {contentclub ? (
                  <p className={classes.contentclub}>{contentclub}</p>
                ) : (
                  <p className={classes.content}>{content}</p>
                )}
                <span></span>
              </div>
            </div>
            <p className={classes["notification-time"]}>{time}</p>
            {message && <div className={classes.message}>{message}</div>}
          </div>
        </div>
        {picture && <img className={classes.image} src={picture} alt="mark" />}
      </div>
    </>
  );
};

export default Notification;
