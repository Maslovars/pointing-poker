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

  const inputRef = useRef('');
  
  const [isOpenPopup, setIsOpenPopup] = useState(false);
  const [isGame, setGame] = useState(false);
  const handlePopup = () => setIsOpenPopup((prevState) => !prevState);
  const handleGame = () => setGame(prev => !prev);

  function startHandler() {
    //socket.emit('create_session', {sessionName: inputRef.current.value, user: {name: 'John', surname: 'Connor', job: 'director'}} )
    setGame(prev => !prev);
  }

  return (
    <StyledWelcome>
      <Logo src={logo} alt="welcome-logo" />
      <StyledText>Start your planning:</StyledText>
      <WelcomeGroup>
        <input ref={inputRef} type='text' placeholder='Create new session:' />
        <Button width="big" text="Start new game" onClick={ startHandler }/>
      </WelcomeGroup>
      <StyledText>OR:</StyledText>
      <WelcomeGroup>
        <Input
          id="url"
          text={"Connect to lobby by URL:"}
          endBtn={
            <Button
              onClick={() => setIsOpenPopup(!isOpenPopup)}
              text="Connect"
              width="big"
            />
          }
        />
      </WelcomeGroup>
      { isGame ? <Modal handlePopup={handleGame}><ConnectionForm handlePopup={handleGame} mode='game' session={inputRef.current.value} /></Modal> : '' }
      {isOpenPopup ? (
        <Modal handlePopup={handlePopup}>
          <ConnectionForm />
        </Modal>
      ) : null}
    </StyledWelcome>
  );
};

export default Welcome;
