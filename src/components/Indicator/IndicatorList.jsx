import React, { useMemo } from "react";
import "./IndicatorList.scss";
import classNames from "classnames";

const IndicatorList = ({ list }) => {
  const completedItems = useMemo(
    () => list.filter((item) => item.done).length,
    [list]
  );

  const pinnedItems = useMemo(
    () => list.filter((item) => item.pinned).length,
    [list]
  );

  const indicatorMetadata = [
    { title: "All items", color: "cyan", value: list.length },
    { title: "Pinned", color: "lilac", value: pinnedItems },
    { title: "Completed", color: "pink", value: completedItems },
  ];

  return (
    <ul className="cnt-indicators">
      {indicatorMetadata.map(({ title, value, color }, id) => (
        <li key={id} className={classNames("indicator ", { [color]: !!color })}>
          <div className="indicator-info align-column align-items-center">
            <span>{title}</span>
            <span>{value}</span>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default IndicatorList;
