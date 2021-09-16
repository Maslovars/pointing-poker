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
import { useState } from "react";
import Modal from "../modal/Modal";

const Welcome = () => {
  const [isOpenPopup, setIsOpenPopup] = useState(false);

  const handlePopup = () => setIsOpenPopup((prevState) => !prevState);

  return (
    <StyledWelcome>
      <Logo src={logo} alt="welcome-logo" />
      <StyledText>Start your planning:</StyledText>
      <WelcomeGroup>
        <StyledPar>Create session:</StyledPar>
        <Button width="big" text="Start new game" />
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
      {isOpenPopup ? (
        <Modal handlePopup={handlePopup}>
          <ConnectionForm />
        </Modal>
      ) : null}
    </StyledWelcome>
  );
};

export default Welcome;
