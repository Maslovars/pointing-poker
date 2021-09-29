/* eslint-disable */

import ConnectionForm from "./ConnectionForm";
import { useState, useEffect } from "react";
import { socket } from "../../common/utils/socket/socket";
import { useHistory, withRouter } from "react-router";
import {
    CONNECT_LOBBY,
    LOBBY_CONNECTED,
    GAMES_LIST,
    USER_CONNECTED,
    USER_DISCONNECTED,
    GAME_ID
} from '../../common/utils/socket/constants';

const ConnectionFormContainer = ({ gameId, handlePopup, match, observer }) => {

    const history = useHistory();

    const [usersData, setUsersData] = useState([]);



    const handleUserConnect = (userId) => {
        //handleIncomingMessage({ message: `${userId} connected` })
    }

    const handleUserDisconnect = (userId) => {
        // handleIncomingMessage({ message: `${userId} disconnected` })
    }

    const handleLobbyRedirect = (data, gameUrl = '') => {
        if (match.params.gameId !== gameUrl) {
            gameUrl && (gameUrl = '/' + gameUrl);
            gameUrl = gameUrl.trim();
            history.push({ pathname: `/lobby${gameUrl}`, state: data });
        }

    }

    const connectLobby = (userData) => {
        socket.emit(CONNECT_LOBBY, {
            gameId: gameId || GAME_ID,
            firstName: userData.firstName,
            lastName: userData.lastName,
            position: userData.position,
            isObserver: userData.isObserver,
            isMaster: !gameId ? true : false,
            position: userData.position,
            ava: userData.ava
        });


    };

    const disconnectLobby = () => {
        /*if (socket.id) {
            socket.emit('LEAVE_ROOM', socket.id);
            setUsersData([]);
        }*/
        handlePopup();

    };

    const addSocketListeners = () => {
        socket.on(LOBBY_CONNECTED, handleLobbyRedirect);
        socket.on(GAMES_LIST, handleLobbyRedirect);
        // socket.on(GAMES_LIST, (data) => {
        //     history.push({ pathname: `/lobby`, state: data })
        //     })
        socket.on(USER_CONNECTED, handleUserConnect)
        socket.on(USER_DISCONNECTED, handleUserDisconnect)
    }

    const removeSocketListeners = () => {
        socket.off(LOBBY_CONNECTED, handleLobbyRedirect);
        socket.off(GAMES_LIST, handleLobbyRedirect);
        //socket.off(RECEIVE_MESSAGE, handleIncomingMessage)
        socket.off(USER_CONNECTED, handleUserConnect)
        socket.off(USER_DISCONNECTED, handleUserDisconnect)
    }



    useEffect(() => {
        addSocketListeners();
        return () => removeSocketListeners();
    }, [])


    return (<ConnectionForm connectLobby={connectLobby} disconnectLobby={disconnectLobby} observer={observer} />
    )
}

export default withRouter(ConnectionFormContainer);
