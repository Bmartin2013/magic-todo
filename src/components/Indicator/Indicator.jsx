import React from "react";

const Indicator = ({ className, title, value }) => {
  return (
    <div className={className}>
      <ul className="indicator-info">
        <li>{title}</li>
        <li>{value}</li>
      </ul>
    </div>
  );
};

export default Indicator;
