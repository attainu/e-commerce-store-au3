import React from "react";

const Badge = props => {
  return (
    <span
      className={`badge badge-pill ${
        props.count > 0 ? "badge-success" : "badge-danger"
      } mx-2`}
    >
      {props.count}
    </span>
  );
};

export default Badge;
