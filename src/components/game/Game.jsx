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
  UsersWrapper,
  ResultContainer,
  CardContainer,
  StyledPercent,
  ButtonWrapper,
} from './style';
import { SET_GAME_DATA, GAME_DATA, LEAVE_GAME, PLAY_GAME_DATA, GET_PLAY_GAME_DATA, RESULTS_DATA } from "../../common/utils/socket/constants";
import Button from '../button/Button';
import { CardsContainer } from "../cards/styles";


const Game = () => {
  const [gameData, setGameData] = useState(null);
  const [results, setResults] = useState(null);
  const gameId = window.location.pathname.replace('/game/', '');
  const userId = socket.id;
  let isRedirect = false;
  const id = socket.id;
  let name = 'Can not find the selected issue.';
  
  if (gameData) {
    const selectedIssue = gameData.issues.find(issue => issue.selected);
    if (selectedIssue) { name = selectedIssue.name }
  }
  
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

  function resultsHandler(data) {
    setResults(data);
  }

  function addSocketListeners() {
    socket.on(PLAY_GAME_DATA, (data) => playDataHandler(data));
    socket.on(GAME_DATA, (data) => {
      if (data.users.find(user => user.userId === userId)) {
        socket.emit(GET_PLAY_GAME_DATA, { room: gameId, id: socket.id, type: 'get' });
        setGameData(data);
      }
      else { isRedirect = true }
    });
    socket.on(RESULTS_DATA, data => resultsHandler(data));
  };



  function removeSocketListeners() {
    socket.off(GAME_DATA, (data) => {
      if (data.users.find(user => user.userId === userId)) {
        socket.emit(GET_PLAY_GAME_DATA, { room: gameId, id, type: 'get' });
        setGameData(data);
      }
      else { isRedirect = true }
    })
    socket.off(PLAY_GAME_DATA, () => playDataHandler());
    socket.off(RESULTS_DATA, data => resultsHandler(data));
  };

  function cardsAddHandler(cardId) {
    socket.emit(GET_PLAY_GAME_DATA, { room: gameId, id, type: 'card_click', cardId });
  };

  useEffect(() => {
    addSocketListeners();
    if (!gameData) { getData(gameId); }
    return () => removeSocketListeners();
  }, []);
  
  if (!results) { return (
  <GameWrapper>
    {isRedirect && <Redirect to='/' />}
    { gameData && <UsersWrapper>
      <Users gameMode={true} gameData={gameData} leaveHandlerFunc={leaveHandler} />
    </UsersWrapper> }
    { gameData && <MainContainer>
      { gameData.gameSettings.isTimer && <Timer maxTime={gameData.gameSettings.minutes * 60 + gameData.gameSettings.seconds} /> }
      <Issues mode={modeTypes.player} gameIssues={gameData.issues} />
      <h2>Please choose difficulty for:</h2>
      <h3>{name}</h3>
      <Cards mode={CardsMode.player} gameCards={gameData.cards} additionalHandler={cardsAddHandler}/>
    </MainContainer> }
    {!gameData && <Message><p>Please wait...</p></Message>}
  </GameWrapper> 
  ) }
  if (results) { return (
    <GameWrapper res={true}>
      <h1>Results of the game:</h1>
      { results.map((res, index) => {
        const title = gameData.issues[index].name;
        const cardsList = Object.keys(res);
        return <ResultContainer key={ gameData.issues[index].id }>
          <h2>{title}</h2>
          <CardsContainer>
            { cardsList.map(key => { return <CardContainer>
              <Cards mode={CardsMode.player} gameCards={[gameData.cards[key]]} additionalHandler={cardsAddHandler}/>
              <StyledPercent>{res[key]}</StyledPercent>  
            </CardContainer>  } ) 
            }
          </CardsContainer>
        </ResultContainer>
      }) }
      <ButtonWrapper>
        <Button text='LEAVE GAME' onClick={leaveHandler}/>
      </ButtonWrapper>
    </GameWrapper>
  )
  }

};

export default Game;
