import React, { useMemo } from "react";
import Indicator from "./Indicator";
import "./IndicatorList.scss";

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
      {indicatorMetadata.map((item, id) => (
        <li key={id}>
          <Indicator {...item} className={`indicator ${item.color}`} />
        </li>
      ))}
    </ul>
  );
};

export default IndicatorList;
