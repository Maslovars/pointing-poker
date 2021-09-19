/* eslint-disable */

import React, {useState, useEffect} from 'react';
import { withRouter } from 'react-router';
import { socket } from "../../common/utils/socket/socket";
import {
    GET_GAME_DATA,
    GAME_DATA,
    GAMES_LIST,
    LOBBY_CONNECTED,
    USER_CONNECTED,
    USER_DISCONNECTED
} from '../../common/utils/socket/constants';
import ConnectionFormContainer from '../connectionForm/ConnectionFormContainer';
import Modal from '../modal/Modal';
import Users from '../ussers/Ussers';

const Lobby = (props) => {

    const [isOpenPopup, setIsOpenPopup] = useState(false);
    const [gameId, setGameId] = useState(props.match.params.gameId);
    const [gameData, setGameData] = useState(null);
    const [gamesList, setGamesList] = useState([]);


    const addSocketListeners = () => {

        socket.on(GAME_DATA, (data)=> {
            
            
            setGameData(data);
            

        })
        socket.on(GAMES_LIST, (data) => {

            setGamesList(data);
        }
            )
        socket.on(LOBBY_CONNECTED, (data) => {
            setIsOpenPopup(false);
            setGameData(data);
        })

        socket.on(USER_CONNECTED, handleUserConnect)
        socket.on(USER_DISCONNECTED, handleUserDisconnect)
    }
    

    const removeSocketListeners = () => {
        socket.off(GAME_DATA, (data)=> {
             setGameData(data);
         })
         socket.off(GAMES_LIST, (data) => {
             setGamesList(data)
         }
             )

    socket.off(LOBBY_CONNECTED, (data) => {
                setIsOpenPopup(false);
                setGameData(data);
            })
        socket.off(USER_CONNECTED, handleUserConnect)
        socket.off(USER_DISCONNECTED, handleUserDisconnect)
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
        {console.log('handle popup im lobby.jsx', isOpenPopup)}
        getGameData(gameId);
        addSocketListeners();
        

        return () => removeSocketListeners();
        
    }, [])
    // если нет такого gameId, тогда выводим список пameId карточками
    // если gameId найден, выводим ConnectionForm в модалке

    if(gameData && gameData.users.find(user => user.userId === socket.id)) {
        return (
        <div>
         <Users />
        </div>
        

    )
    } /* else if
    (gamesList) {
     return  gamesList.map(game=> <div key={game}>{game}</div>)
     } */ else {
        return (isOpenPopup &&
            <Modal handlePopup={handlePopup}> <ConnectionFormContainer gameId={gameId} handlePopup={handlePopup} />
            </Modal>)

        }

}

export default withRouter(Lobby);
