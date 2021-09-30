/* eslint-disable */

import React, { useEffect, useState } from "react";
import { Redirect } from 'react-router-dom';
import Timer from "../timer/Timer";
import Users from '../ussers/Ussers';
import Issues from '../issues/Issues';
import { socket } from '../../common/utils/socket/socket';
import { modeTypes } from "../issues/constants";
import Cards from '../cards/Cards';
import { CardsMode } from '../cards/constants';
import { 
  GameWrapper,
  MainContainer,
  Message,
  UsersWrapper
} from './style';
import { SET_GAME_DATA, GAME_DATA, LEAVE_GAME, PLAY_GAME_DATA, GET_PLAY_GAME_DATA } from "../../common/utils/socket/constants";


const Game = () => {
  console.log('----CREATE COMPONENT----')
  const [gameData, setGameData] = useState(null);
  const gameId = window.location.pathname.replace('/game/', '');
  const userId = socket.id;
  let isRedirect = false;
  
  function leaveHandler() {
    socket.emit(LEAVE_GAME, { gameId, userId });
  };
  
  function getData(gameId) {
    socket.emit(SET_GAME_DATA, {type: 'get', gameId})
  };

  function playDataHandler(data) {
    setGameData(prev => {
      const { users, gameSettings } = prev;
      const { issues, cards } = data;
      const newData = { users, gameSettings, issues, cards };
      return newData;
    })
  };

  function addSocketListeners() {
    socket.on(PLAY_GAME_DATA, (data) => playDataHandler(data));
    socket.on(GAME_DATA, (data) => {
      if (data.users.find(user => user.userId === userId)) {
        socket.emit(GET_PLAY_GAME_DATA, { room: gameId, id: socket.id });
        setGameData(data);
      }
      else { isRedirect = true }
    })
  };



  function removeSocketListeners() {
    socket.off(GAME_DATA, (data) => {
      if (data.users.find(user => user.userId === userId)) {
        socket.emit(GET_PLAY_GAME_DATA, { room: gameId, id: socket.id });
        setGameData(data);
      }
      else { isRedirect = true }
    })
    socket.off(PLAY_GAME_DATA, () => playDataHandler());
  };

  function cardsAddHandler(id) {
    console.log('CARDS CLICK>>>', id);
  };

  useEffect(() => {
    addSocketListeners();
    if (!gameData) { getData(gameId); }
    return () => removeSocketListeners();
  }, []);
  
  return (
  <GameWrapper>
    { console.log('-----RENDER------') }
    {isRedirect && <Redirect to='/' />}
    { gameData && <UsersWrapper>
      <Users gameMode={true} gameData={gameData} leaveHandlerFunc={leaveHandler} />
    </UsersWrapper> }
    { gameData && <MainContainer>
      { gameData.gameSettings.isTimer && <Timer maxTime={gameData.gameSettings.minutes * 60 + gameData.gameSettings.seconds} /> }
      <Issues mode={modeTypes.player} gameIssues={gameData.issues} />
      <Cards mode={CardsMode.player} gameCards={gameData.cards} additionalHandler={cardsAddHandler}/>
    </MainContainer> }
    {!gameData && <Message><p>Connecting to server...</p></Message>}
  </GameWrapper>
  )

};

export default Game;
