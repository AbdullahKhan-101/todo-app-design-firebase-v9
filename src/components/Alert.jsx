import React from "react";

const Alert = ({ alert }) => {
  const capatilize = (word) => {
    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  };

  return (
    alert && (
      <div>
        <div
          className="alert alert-success alert-dismissible fade show"
          role="alert"
        >
          <b>{alert.type}</b> : {capatilize(alert.msg)}
        </div>
      </div>
    )
  );
};

export default Alert;
