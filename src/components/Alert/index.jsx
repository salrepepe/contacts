import React from "react";

const Alert = ({ title, open }) => {
  return <div className={open ? "alert alert_open" : "alert"}>{title}</div>;
};

export default Alert;
