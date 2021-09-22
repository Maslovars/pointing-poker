/* eslint-disable */

import React from "react";
import Timer from "../timer/Timer";

const Game = () => {

const maxTime = 10;

const onTimerStart = () => {
  alert('timer has started')
}

const onTimerEnd = () => {
  alert('time is out')
}

  return (
  <div>Game
    <Timer maxTime={maxTime} onTimerStart={onTimerStart} onTimerEnd={onTimerEnd} />
  </div>)

};

export default Game;
