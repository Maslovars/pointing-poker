/* eslint-disable */
import ConnectionForm from "../connectionForm/ConnectionForm";
import logo from "../../assets/welcome-logo.png";
import {
  Logo,
  StyledPar,
  StyledText,
  StyledWelcome,
  WelcomeGroup,
} from "./styles";
import Input from "../input/Input";
import Button from "../button/Button";
import { useState, useRef } from "react";
import Modal from "../modal/Modal";
import { socket } from "../../common/utils/socket/socket";

const Welcome = () => {

  const [gameName, setGameName] = useState('');
  const [joinName, setJoinName] = useState('');
  const [isOpenPopup, setIsOpenPopup] = useState(false);
  const [isGame, setGame] = useState(false);
  const handlePopup = () => setIsOpenPopup(prev => {if (prev === true) {setJoinName('')}; return !prev });
  const handleGame = () => setGame(prev => {if (prev === true) {setGameName('')}; return !prev });
    
  return (
    <StyledWelcome>
      <Logo src={logo} alt="welcome-logo" />
      <StyledText>Start your planning:</StyledText>
      <WelcomeGroup>
        <Input
          id="game"
          value={gameName}
          text="Create new game:"
          onChange={(event) => setGameName(event.target.value)}
          endBtn={
            <Button
              onClick={ handleGame }
              text="Start new game"
              width="big"
            />
          }
        />
        
      </WelcomeGroup>
      <StyledText>OR:</StyledText>
      <WelcomeGroup>
        <Input
          id="url"
          text={"Connect to game with it name:"}
          value={joinName}
          onChange={(event) => setJoinName(event.target.value)}
          endBtn={
            <Button
              onClick={() => setIsOpenPopup(!isOpenPopup)}
              text="Connect"
              width="big"
            />
          }
        />
      </WelcomeGroup>
      { isGame ? <Modal handlePopup={handleGame}><ConnectionForm handlePopup={handleGame} mode='game' session={gameName} /></Modal> : '' }
      {isOpenPopup ? (
        <Modal handlePopup={handlePopup}>
          <ConnectionForm handlePopup={handlePopup} session={joinName}/>
        </Modal>
      ) : null}
    </StyledWelcome>
  );
};

export default Welcome;
