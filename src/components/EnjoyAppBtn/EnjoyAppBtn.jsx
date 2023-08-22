import React from "react";
import "./EnjoyAppBtn.scss"

const EnjoyAppBtn = () => (
  <div className="cnt-enjoy-full-app-button">
    <button onClick={() => alert("see you next time")} data="Click here to enjoy the full app"></button>
  </div>
);

export default EnjoyAppBtn;