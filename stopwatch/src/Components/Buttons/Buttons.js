import React from "react";
import "./Buttons.css";

function Buttons(props) {
  const StartButton = (
    <div className="btn btn-one btn-start" onClick={props.handleStart}>
      Start
    </div>
  );

  const ActiveButtons = (
    <div className="btn-grp">
      <div className="btn btn-two" onClick={props.handleReset}>
        Reset
      </div>
      <div className="btn btn-one" onClick={props.handlePauseResume}>
        {props.isPaused ? "Resume" : "Pause"}
      </div>
    </div>
  );

  return (
    <div className="Buttons">
      <div>{props.active ? ActiveButtons : StartButton}</div>
    </div>
  );
}

export default Buttons;
