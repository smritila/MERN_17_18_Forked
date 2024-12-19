import React from "react";
import "./Notification.css";

const Notification = ({ type, message }) => {
  const themeClass =
    type === "success" ? "notification-success" : "notification-error";

  return (
    <div className={`notification ${themeClass}`}>
      <p>{message}</p>
    </div>
  );
};

export default Notification;
