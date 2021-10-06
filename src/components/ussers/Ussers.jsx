import React from "react";
import {
  UsersContainer,
  UserWrapper,
  Wrapper,
  UserContainer,
  StyledLinkContainer,
  InputsContainer,
} from "./style";
import { PropTypes } from 'prop-types';

import User from "./user/User";
import { useSelector } from "react-redux";
import { socket } from "../../common/utils/socket/socket";
import { LEAVE_GAME } from "../../common/utils/socket/constants";
import { useLocation, Redirect } from "react-router-dom";
import { StyledInput } from "../input/style";
import Button from "../button/Button";

export default function Ussers(props) {
  const { startGameHandler, gameData, leaveHandlerFunc, gameMode } = props;
  const url = window.location.href;
  let userData;
  let gameId;
  const userId = socket.id;
  let users;
  let leaveHandler;
  if (gameData) {
    users = gameData.users;
    userData = users.find((user) => user.userId === userId);
    gameId = useLocation().pathname.replace(/\/\w*\//, "");
    leaveHandler = leaveHandlerFunc;
  } else {
    users = useSelector((state) => state.appState.users);
    userData = users.find((user) => user.userId === userId);
    gameId = useLocation().pathname.replace(/\/\w*\//, "");
    leaveHandler = () => { socket.emit(LEAVE_GAME, { gameId, userId }) };
  }

  const copyHandler = () => {
    const link = document.getElementById("link");
    link.select();
    document.execCommand("copy");
  };

  return (
    <Wrapper>
      {!userData && <Redirect to="/" />}
      <UserContainer gameMode={gameMode}>
        <UserWrapper>
          {!!userData && (
            <User
              id={userData.userId}
              name={userData.firstName}
              surname={userData.lastName}
              position={userData.position}
              ava={userData.ava}
              master={true}
              room={gameId}
            />
          )}
          {!!userData && !gameData && userData.isMaster && (
            <StyledLinkContainer>
              <p>Link to lobby:</p>
              <InputsContainer>
                <StyledInput
                  id="link"
                  type="text"
                  readOnly={true}
                  value={url}
                />
                <Button
                  type="button"
                  text="Copy"
                  onClick={copyHandler}
                />
              </InputsContainer>
              <Button
                type='button'
                text="Start game"
                margin="30px 0 10px 0"
                onClick={startGameHandler} />
            </StyledLinkContainer>
          )}
        </UserWrapper>
        {!gameMode && <Button
          type="button"
          color="white"
          text="Leave lobby"
          margin="30px 30px 10px 10px"
          onClick={leaveHandler}
        />}
        {gameMode && <Button
          gameMode={gameMode}
          type="button"
          text="Exit"
          color="white"
          margin="30px 30px 10px 10px"
          onClick={leaveHandler}
        />}
      </UserContainer>
      <h2>Members:</h2>
      <UsersContainer gameMode={gameMode}>
        {users.map(
          (user) =>
            user.userId !== userId && (
              <User
                key={user.userId}
                id={user.userId}
                name={user.firstName}
                surname={user.lastName}
                position={user.position}
                ava={user.ava}
                master={user.isMaster}
                room={gameId}
              />
            )
        )}
      </UsersContainer>
    </Wrapper>
  );
}

Ussers.propTypes = {
  startGameHandler: PropTypes.func,
  leaveHandlerFunc: PropTypes.func,
  gameData: PropTypes.object,
  gameMode: PropTypes.bool,
}

Ussers.defaultProps = {
  startGameHandler: () => console.warn('Users startGameHandler was not defined.'),
  leaveHandlerFunc: () => console.warn('Users leaveHandler was not defined.'),
  gameData: null,
  gameMode: false,
}
