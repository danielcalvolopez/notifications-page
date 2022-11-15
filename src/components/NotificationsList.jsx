import React from "react";
import notifications from "../data/notifications";
import Notification from "./Notification";

const NotificationsList = () => {
  return (
    <div>
      {notifications.map(
        ({
          avatar,
          name,
          description,
          content,
          time,
          picture,
          message,
          contentclub,
        }) => (
          <Notification
            key={name}
            avatar={avatar}
            name={name}
            description={description}
            content={content}
            time={time}
            picture={picture}
            message={message}
            contentclub={contentclub}
          />
        )
      )}
    </div>
  );
};

export default NotificationsList;
