/* eslint-disable */
import ConnectionFormContainer from '../connectionForm/ConnectionFormContainer';
import Modal from '../modal/Modal';
import React, { useState, useEffect } from 'react';
import { socket } from "../../common/utils/socket/socket";
import {
  GAME_DATA,
  SET_GAME_DATA,
  START_GAME,
  GAME_STARTED,
} from '../../common/utils/socket/constants';
import Users from '../ussers/Ussers';
import Chat from '../chat/Chat';
import { useDispatch, useSelector } from 'react-redux';
import { updateData } from '../../redux/actions/actions';
import GameSettingsForm from '../gameSettingsForm/GameSettingsForm';
import Issues from '../issues/Issues';
import { modeTypes } from '../issues/constants';
import Cards from '../cards/Cards';
import { useHistory, withRouter } from 'react-router-dom';
import { LobbyWrapper, Dashboard, StyledDiv, StyledImg } from './style';
import icon from "../../assets/chat.svg";

const Lobby = () => {
  const history = useHistory();
  const [isOpenPopup, setIsOpenPopup] = useState(false);
  const [user, setUser] = useState(undefined);
  const [chat, setChat] = useState(true);
  const room = history.location.pathname.replace('/lobby/', '');
  const store = useSelector((state) => state.appState);
  const cards = store.cards.cardsSet;
  const issues = store.issues.issuesSet;
  const users = store.users
  const gameSettings = store.gameSettings;
  const dispatch = useDispatch();

  const sendData = ({ type }) => {
    switch (type) {
      case 'get': socket.emit(SET_GAME_DATA, { type, gameId: room, data: { cards, issues, gameSettings } }); break;
      case 'post': socket.emit(SET_GAME_DATA, { type, gameId: room, data: { cards, issues, gameSettings } }); break;
      default: return;
    }
  }

  if (!user && users.length) { setUser(users.find(user => user.userId === socket.id)) }

  const getGameSettings = (gameSettings) => {
    dispatch(updateData({ gameSettings }))
  }

  const updateStore = (data) => {
    const socketUsers = data.users;
    const sockedUser = socketUsers.find(el => el.userId === socket.id);
    if (!sockedUser) { history.push(`/`); return; }
    const { isMaster } = sockedUser;
    if (isMaster) {
      dispatch(updateData({ users: data.users }));
    } else {
      dispatch(updateData(data));
    }
  }

  let mode = modeTypes.player;
  if (user && user.isMaster) { mode = modeTypes.master }

  const startGame = () => {
    socket.emit(START_GAME, { room });
    history.push(`/game/${room}`);
  }

  const handlePopup = () => {
    setIsOpenPopup((prevState) => !prevState);
  }

  const addSocketListeners = () => {
    socket.on(GAME_STARTED, () => {
      if (user && user.isMaster) { return };
      history.push(`/game/${room}`);
    })
    socket.on(GAME_DATA, data => updateStore(data));
  }

  const removeSocketListeners = () => {
    socket.off(GAME_STARTED, () => {
      if (user && user.isMaster) { return };
      history.push(`/game/${room}`);
    })
    socket.off(GAME_DATA, data => updateStore(data))
  }

  useEffect(() => {
    if (user && user.isMaster) { sendData({ type: 'post' }) };
  }, [issues, cards, gameSettings])

  useEffect(() => {
    sendData({ type: 'get' });
    addSocketListeners();
    return () => removeSocketListeners();
  }, [])
  if (user) {
    return (
      <Dashboard>
        <LobbyWrapper>
          <Users startGameHandler={startGame} />
          {user.isMaster && <h2>Issues:</h2>}
          <Issues mode={mode} />
          {user.isMaster && <h2>Add card values:</h2>}
          {user && user.isMaster && <Cards mode={mode} />}
          {user && user.isMaster && <GameSettingsForm getGameSettings={getGameSettings} />}
        </LobbyWrapper>
        <StyledDiv>
          {chat && <Chat room={room} users={users} userId={user.userId} />}
        </StyledDiv>
        <StyledImg src={icon} alt="chat" onClick={() => setChat(!chat)} />
      </Dashboard>

    )
  }
  if (!user && !isOpenPopup) { return <div><h1>Please, wait</h1></div> }
  if (isOpenPopup) {
    return <Modal handlePopup={handlePopup}> <ConnectionFormContainer gameId={room} handlePopup={handlePopup} />
    </Modal>
  }
}

export default withRouter(Lobby);
