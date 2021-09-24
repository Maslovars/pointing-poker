/* eslint-disable */

import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router';
import { socket } from "../../common/utils/socket/socket";
import {
    GAME_DATA,
    SET_GAME_DATA,
    START_GAME,
    GAME_STARTED,
    USER_CONNECTED
} from '../../common/utils/socket/constants';
import ConnectionFormContainer from '../connectionForm/ConnectionFormContainer';
import Modal from '../modal/Modal';
import Users from '../ussers/Ussers';
import { useDispatch, useSelector } from 'react-redux';
import { updateData } from '../../redux/actions/actions';
import GameSettingsForm from '../gameSettingsForm/GameSettingsForm';
import Issues from '../issues/Issues';
import { modeTypes } from '../issues/constants';
import Cards from '../cards/Cards';
import { useHistory } from 'react-router-dom';

const Lobby = () => {
    const [user, setUser] = useState('');
    const [isOpenPopup, setIsOpenPopup] = useState(false);
    const room = window.location.pathname.replace('/lobby/', '');
    const store = useSelector((state) => state.appState);
    const cards = store.cards.cardsSet;
    const issues = store.issues.issuesSet;
    const users = store.users;
    const addedUser = users.find(user => user.userId === socket.id);
    const dispatch = useDispatch();
    
    const sendData = () => {
        console.log('SEND DATA');
        socket.emit(SET_GAME_DATA, { gameId: room, data: { cards, issues } });
    } 
    
    const updateStore = (data) => {
      console.log('GET DATA')
      const { users } = data;
      const sockedUser = users.find(user => user.userId === socket.id)
      const { isMaster } = sockedUser;
      if (isMaster) {
        dispatch(updateData({ users: data.users }));
      } else {
        dispatch(updateData(data));
      }
    }
    
    if (user === '' && addedUser) { setUser({ ...addedUser }) }
    if (user === '') { sendData() }
    
        
    console.log('-------------RESET------------------');
    
    const history = useHistory();
    let mode = modeTypes.player;
    if (user && user.isMaster) { mode = modeTypes.master }
    
    const startGame = () => {
      socket.emit(START_GAME, { room });
      history.push(`/game/${room}`);
    }

    const addSocketListeners = () => {
        socket.on(GAME_STARTED, () => {
            if (user && user.isMaster) { return };
            history.push(`/game/${room}`);
        })
        socket.on(GAME_DATA, data => updateStore(data))
    }

    const removeSocketListeners = () => {
      socket.removeAllListeners();
    }

    const handlePopup = () => {
      setIsOpenPopup((prevState) => !prevState);
    }

    useEffect(() => {
      if ( user && user.isMaster ) { sendData(); }
    }, [issues, cards]);

    useEffect(() => {
        { console.log('handle popup im lobby.jsx', isOpenPopup) }
        addSocketListeners();
        return () => removeSocketListeners();
    }, [])

    if (user) {
        return (
            <div>
                <Users startGameHandler={startGame} />
                <Issues mode={mode} />
                { user.isMaster && <Cards mode={mode} /> }
                { user.isMaster && <GameSettingsForm /> }
            </div>
        )
    } else {
        return (isOpenPopup &&
            <Modal handlePopup={handlePopup}> <ConnectionFormContainer gameId={gameId} handlePopup={handlePopup} />
            </Modal>)

    }

}

export default withRouter(Lobby);
