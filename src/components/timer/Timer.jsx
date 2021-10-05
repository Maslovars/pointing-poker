import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { StyledTimer } from "./style";


const formatTime = (value) => {
  return value < 10 ? `0${value}` : value;
};

const Timer = ({maxTime, onTimerStart, onTimerEnd}) => {
  const [time, setTime] = useState(maxTime);
  const [isActiveTimer, setIsActiveTimer] = useState(false);


  const updateSeconds = () => {
    setTime((prevState) => {
      return prevState && prevState - 1;
    });
  };

  const handleStart = () => {
    onTimerStart();
    setIsActiveTimer((prevState) => !prevState);
  };

  const handleRestart = () => {
    setTime(maxTime);
    onTimerStart();
    setIsActiveTimer(true);
  };

  useEffect(() => {
    let timer = null;
    if (isActiveTimer) {
      
      timer = setInterval(updateSeconds, 1000);
    } else if (!isActiveTimer && time !== 0) {
      clearInterval(timer);
    } 
    if (time === 0) {
        onTimerEnd();
        clearInterval(timer);
    }
    return () => {
      clearInterval(timer);
    };
  }, [time, isActiveTimer]);

  const minutesView = formatTime(Math.floor(time / 60));
  const secondsView = formatTime(time % 60);

  return (

      <StyledTimer>
        {minutesView}:{secondsView}
        <div>
      <button disabled={!time} onClick={handleStart}>
        {isActiveTimer ? "Pause" : "Start"}
      </button>
      <button onClick={handleRestart}>
        Restart
      </button>
      </div>
    </StyledTimer>
  );
};

Timer.propTypes = {
    onTimerStart: PropTypes.func,
    onTimerEnd: PropTypes.func,
    maxTime: PropTypes.number
  };
  
  Timer.defaultProps = {
    maxTime: 0,
    onTimerStart: () => console.warn('Timer start function is not defined.'),
    onTimerEnd: () => console.warn('Timer end function is not defined.'),
  };

export default Timer;
