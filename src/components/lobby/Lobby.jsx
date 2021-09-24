/* eslint-disable */

import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router';
import { socket } from "../../common/utils/socket/socket";
import {
    GET_GAME_DATA,
    GAME_DATA,
    GAMES_LIST,
    LOBBY_CONNECTED,
    USER_CONNECTED,
    USER_DISCONNECTED,
    SET_GAME_DATA
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

const Lobby = (props) => {

    const [isOpenPopup, setIsOpenPopup] = useState(false);
    const [gameId, setGameId] = useState(props.match.params.gameId);
    const [gameData, setGameData] = useState(null);
    const [gamesList, setGamesList] = useState([]);
    const [user, setUser] = useState(null);
    const addedUser = useSelector((state) => state.appState.users.find(user => user.userId === socket.id));
    if (!user && addedUser) { setUser(addedUser); }
    const dispatch = useDispatch();
    const state = useSelector(state => state.appState);
    const cards = state.cards.cardsSet;
    const issues = state.issues.issuesSet;
    const [gameSettings, setGameSettings] = useState({})
    let mode = modeTypes.player;
    if (user && user.isMaster) { mode = modeTypes.master }

    const getGameSettings = (settings) => {
        setGameSettings({
            isPlayer: settings.isPlayer,
            changingCard: settings.changingCard,
            autoEntrance: settings.autoEntrance,
            changingDecision: settings.changingDecision,
            isTimer: settings.isTimer,
            scoreType: settings.scoreType,
            scoreTypeShort: settings.scoreTypeShort,
            minutes: settings.minutes,
            seconds: settings.seconds
        })
    }

    const sendData = (data) => {
        socket.emit(SET_GAME_DATA, { gameId: gameId, data: {...data} });
    }
    const addSocketListeners = () => {

        socket.on(GAME_DATA, (data) => {
            let update;
            const { users } = data;
            if (user && user.isMaster) { update = { users } } else { update = data }
            setGameData(update);
            dispatch(updateData(update));
        })


        socket.on(GAMES_LIST, (data) => {
            setGamesList(data);
        }
        )
        socket.on(LOBBY_CONNECTED, (data) => {
            setIsOpenPopup(false);
        })

        socket.on(USER_CONNECTED, handleUserConnect)
        socket.on(USER_DISCONNECTED, handleUserDisconnect)
    }


    const removeSocketListeners = () => {
        socket.off(GAME_DATA, (data) => {
            let update;
            const { users } = data;
            if (user && user.isMaster) { update = { users } } else { update = data }
            setGameData(update);
            dispatch(updateData(update));
        })
        socket.off(GAMES_LIST, (data) => {
            setGamesList(data)
        }
        )

        socket.off(LOBBY_CONNECTED, (data) => {
            setIsOpenPopup(false);
            dispatch(updateData(data));
        })
        socket.off(USER_CONNECTED, handleUserConnect);
        socket.off(USER_DISCONNECTED, handleUserDisconnect);
    }


    const handlePopup = () => {
        setIsOpenPopup((prevState) => !prevState);
    }

    const getGameData = (gameId) => {
        if (gameId) {

            if (gamesList.length === 0) {
                handlePopup();
            }
            socket.emit(GET_GAME_DATA, gameId);
        }

    }

    const handleUserConnect = (userId) => {
        // handleIncomingMessage({ message: `${userId} connected` })
    }

    const handleUserDisconnect = (userId) => {
        // handleIncomingMessage({ message: `${userId} disconnected` })
    }

    useEffect(() => {
        if (user && user.isMaster) { sendData({issues, cards, gameSettings}) };
    }, [issues, cards, gameSettings])

    useEffect(() => {
        { console.log('render in UE') }
        getGameData(gameId);
        addSocketListeners();
        return () => removeSocketListeners();
    }, [])
    // если нет такого gameId, тогда выводим список пameId карточками
    // если gameId найден, выводим ConnectionForm в модалке

    if (gameData && user) {
        return (
            <div>
                <Users />
                <Issues mode={mode} />
                {user.isMaster && <Cards mode={mode} />}
                {user.isMaster && <GameSettingsForm getGameSettings={getGameSettings} />}
            </div>
        )
    } else if
        (gamesList) {
        return gamesList.map(game => <div key={game}>{game}</div>)
    } else {
        return (isOpenPopup &&
            <Modal handlePopup={handlePopup}> <ConnectionFormContainer gameId={gameId} handlePopup={handlePopup} />
            </Modal>)

    }

}

export default withRouter(Lobby);
