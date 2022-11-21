import React, { useContext } from "react";
import { NotificationsContext } from "../context/NotificationsContext";
import Notification from "./Notification";

const NotificationsList = ({ read }) => {
  const notiCtx = useContext(NotificationsContext);

  return (
    <div>
      {notiCtx.map(
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
            read={read}
          />
        )
      )}
    </div>
  );
};

export default NotificationsList;
