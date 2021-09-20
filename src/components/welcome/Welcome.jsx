/* eslint-disable */
import React, { useEffect } from 'react';
import logo from "../../assets/welcome-logo.png"
import { Logo, StyledPar, StyledText, StyledWelcome, WelcomeGroup } from './styles';
import Input from '../input/Input';
import Button from '../button/Button';
import { useState } from 'react';
import Modal from '../modal/Modal';
import ConnectionFormContainer from '../connectionForm/ConnectionFormContainer';
import { socket } from '../../common/utils/socket/socket';
import { LOBBY_CONNECTED } from '../../common/utils/socket/constants';
import { useDispatch } from 'react-redux';
import { updateData } from '../../redux/actions/actions';

const Welcome = () => {
    const dispatch = useDispatch();
    useEffect(() => {
      socket.once(LOBBY_CONNECTED, (data) => {
        dispatch(updateData(data)); 
      })
    }, [])

   const [isOpenPopup, setIsOpenPopup] = useState(false);

    const [gameId, setGameId] = useState('');

    const handlePopup = () => {
        
        setIsOpenPopup((prevState) => !prevState);
        
    }

    const handleOpenConnectForm = (event) => {
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
                <Button onClick={handleOpenConnectForm} width="big" text="Start new game" />
            </WelcomeGroup>
            <StyledText>OR:</StyledText>
            <WelcomeGroup>
                <Input id="url" value={gameId} onChange={handleUrlChange} text={"Connect to lobby by URL:"} endBtn={<Button onClick={handleOpenConnectForm} text="Connect" width="big" />} />
            </WelcomeGroup>
            {console.log('handle popup im welcome.jsx', isOpenPopup)}
            {isOpenPopup &&
                <Modal handlePopup={handlePopup}> 
                    <ConnectionFormContainer gameId={gameId.split('/')[4]} handlePopup={handlePopup}/>
                </Modal>}
        </StyledWelcome>
    )

}

export default Welcome;
