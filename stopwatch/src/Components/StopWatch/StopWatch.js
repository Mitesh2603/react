import React, { useState, useEffect } from "react";
import "./StopWatch.css";
import Timer from "../Timer/Timer.js";
import Buttons from "../Buttons/Buttons.js";
import CountDown from "../CountDown/CountDown.js";

let interval = 0;
function StopWatch(props) {
  const [isActive, setIsActive] = useState(false);
  const [isPaused, setIsPaused] = useState(true);
  const [time, setTime] = useState(0);
  const [countDown, setCountDown] = useState(0);

  useEffect(() => {
    if (isActive && !isPaused) {
      interval = setInterval(() => {
        setTime((time) => time + 10);
        setCountDown((countDown) => countDown - 10);
      }, 10);
    } else {
      clearInterval(interval);
      console.log("Interval", interval);
    }
    return () => {
      clearInterval(interval);
    };
  }, [isActive, isPaused]);

  if (countDown < 0) {
    setCountDown(0);
    setTime(isPaused);
  }

  const handleStart = () => {
    setIsActive(true);
    setIsPaused(false);
  };

  const handlePauseResume = () => {
    setIsPaused(!isPaused);
  };
  const handleReset = () => {
    setIsActive(false);
    setTime(0);
    setCountDown(0);
  };

  const getInputValue = (event) => {
    const userValue = event.target.value;
    setCountDown(userValue);
  };

  return (
    <div className="stop-watch">
      <input type="number" onChange={getInputValue} placeholder="Time" />
      <h2>StopWatch</h2>
      <Timer time={time} />
      <h2>Timer</h2>
      <CountDown time={countDown} />
      <Buttons
        active={isActive}
        isPaused={isPaused}
        handleStart={handleStart}
        handlePauseResume={handlePauseResume}
        handleReset={handleReset}
      />
    </div>
  );
}

export default StopWatch;
