/* eslint-disable */
import React from 'react';
import logo from "../../assets/welcome-logo.png"
import { Logo, StyledPar, StyledText, StyledWelcome, WelcomeGroup } from './styles';
import Input from '../input/Input';
import Button from '../button/Button';
import { useState, useEffect } from 'react';
import Modal from '../modal/Modal';
import { socket } from '../../common/utils/socket/socket';
import { CHECK_GAME_ID, GAME_ID_EXISTS } from '../../common/utils/socket/constants';
import ConnectionFormContainer from '../connectionForm/ConnectionFormContainer';

const Welcome = () => {

    const [isOpenPopup, setIsOpenPopup] = useState(false);

    const [gameId, setGameId] = useState('');
    const [currentGameIdValue, setCurrentGameIdValue] = useState('');

    const [visibleObserver, setVisibleObserver] = useState(true);

    const handlePopup = () => {
        setIsOpenPopup((prevState) => !prevState);
    }

    const handleOpenConnectForm = (event) => {
        event.target.innerText === 'Start new game' ? setVisibleObserver(false) : setVisibleObserver(true);
        (event.target.innerText === 'Start new game') && setGameId('');
        handlePopup();
    }

    const handleUrlChange = (event) => {
        setCurrentGameIdValue(event.target.value);
        const idParsed = event.target.value.split('/')[4];
        console.log(idParsed)
        idParsed && socket.emit(CHECK_GAME_ID, idParsed);
    }
    const addSocketListeners = () => {
        socket.on(GAME_ID_EXISTS, gameId => {
            console.log(gameId)
            if (gameId) {
                setGameId(gameId);
            } else {
                setGameId('');
            }
        });
    }

    const removeSocketListeners = () => {
        socket.off(GAME_ID_EXISTS, (gameId) => {
            if (gameId) {
                setGameId(gameId);
            } else {
                setGameId('');
            }
        });
    }

    useEffect(() => {
        addSocketListeners();
        return () => removeSocketListeners();
    }, [])

    return (
        <StyledWelcome>
            <Logo src={logo} alt="welcome-logo" />
            <StyledText>Start your planning:</StyledText>
            <WelcomeGroup>
                <StyledPar>Create session:</StyledPar>
                <Button onClick={(event) => handleOpenConnectForm(event)} width="big" text="Start new game" />
            </WelcomeGroup>
            <StyledText>OR:</StyledText>
            <WelcomeGroup>
                <Input id="url" value={currentGameIdValue} onChange={handleUrlChange} text={"Connect to lobby by URL:"}
                    endBtn={<Button onClick={handleOpenConnectForm} text="Connect" width="big" disabled={gameId ? false : true} />} />
            </WelcomeGroup>
            {console.log('handle popup im welcome.jsx', isOpenPopup)}
            {isOpenPopup &&
                <Modal handlePopup={handlePopup}>
                    <ConnectionFormContainer gameId={gameId} handlePopup={handlePopup} observer={visibleObserver} />
                </Modal>}
        </StyledWelcome>
    )

}

export default Welcome;
