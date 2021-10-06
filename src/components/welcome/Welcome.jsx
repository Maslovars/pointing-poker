/* eslint-disable */
import React from 'react';
import logo from "../../assets/welcome-logo.png"
import { Logo, StyledPar, StyledText, StyledWelcome, WelcomeGroup } from './styles';
import Input from '../input/Input';
import Button from '../button/Button';
import { useState } from 'react';
import Modal from '../modal/Modal';
import ConnectionFormContainer from '../connectionForm/ConnectionFormContainer';

const Welcome = () => {

    const [isOpenPopup, setIsOpenPopup] = useState(false);

    const [gameId, setGameId] = useState('');

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
        setGameId(event.target.value);
    }

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
                <Input id="url" value={gameId} onChange={handleUrlChange} text={"Connect to lobby by URL:"}
                    endBtn={<Button onClick={handleOpenConnectForm} text="Connect" width="big" disabled={gameId ? false : true} />} />
            </WelcomeGroup>
            {console.log('handle popup im welcome.jsx', isOpenPopup)}
            {isOpenPopup &&
                <Modal handlePopup={handlePopup}>
                    <ConnectionFormContainer gameId={gameId.split('/')[4]} handlePopup={handlePopup} observer={visibleObserver} />
                </Modal>}
        </StyledWelcome>
    )

}

export default Welcome;
