/* eslint-disable */

import React, { useEffect, useState } from "react";
import { Redirect } from 'react-router-dom';
import Timer from "../timer/Timer";
import Users from '../ussers/Ussers'
import { socket } from '../../common/utils/socket/socket';
import { 
  GameWrapper,
  Message
} from './style';
import { SET_GAME_DATA, GAME_DATA, LEAVE_GAME } from "../../common/utils/socket/constants";


const Game = () => {
  console.log('----CREATE COMPONENT----')
  const [gameData, setGameData] = useState(null);
  const gameId = window.location.pathname.replace('/game/', '');
  const userId = socket.id;
  let isRedirect = false;
  

  function leaveHandler() {
    socket.emit(LEAVE_GAME, { gameId, userId });
  }
  
  function getData(gameId) {
    socket.emit(SET_GAME_DATA, {type: 'get', gameId})
  }

  function addSocketListeners() {
    socket.on(GAME_DATA, (data) => {
      if (data.users.find(user => user.userId === userId)) { setGameData(data); }
      else { isRedirect = true }
    })
  }

  useEffect(() => {
    addSocketListeners();
    if (!gameData) { getData(gameId); }
    return () => socket.removeAllListeners();
  }, [])
  
  return (
  <GameWrapper>
    { console.log('-----RENDER------') }
    {isRedirect && <Redirect to='/' />}
    { gameData &&  <Users  gameData={gameData} leaveHandlerFunc={leaveHandler} /> }
    {!gameData && <Message><p>Connecting to server...</p></Message>}
  </GameWrapper>
  )

};

export default Game;
