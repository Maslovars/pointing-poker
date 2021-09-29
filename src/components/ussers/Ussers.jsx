import React from "react";
import {
  UsersContainer,
  UserWrapper,
  LeaveButton,
  Wrapper,
  UserContainer,
  StyledLinkContainer,
  StyledInput,
  InputsContainer,
  StartButton,
} from "./style";
import { PropTypes } from 'prop-types';

import User from "./user/User";
import { useSelector } from "react-redux";
import { socket } from "../../common/utils/socket/socket";
import { LEAVE_GAME } from "../../common/utils/socket/constants";
import { useLocation, Redirect } from "react-router-dom";

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
              <p>link to lobby:</p>
              <InputsContainer>
                <StyledInput
                  id="link"
                  width="350px"
                  type="text"
                  readOnly={true}
                  value={url}
                />
                <StyledInput
                  width="75px"
                  type="button"
                  defaultValue="COPY"
                  onClick={copyHandler}
                />
              </InputsContainer>
              <StartButton type='button' defaultValue="START NEW GAME" onClick={startGameHandler} />
            </StyledLinkContainer>
          )}
        </UserWrapper>
        { !gameMode && <LeaveButton
          type="button"
          defaultValue="LEAVE LOBBY"
          onClick={leaveHandler}
        /> }
        { gameMode && <LeaveButton
          gameMode={gameMode}
          type="button"
          defaultValue="EXIT"
          onClick={leaveHandler}
        /> }
      </UserContainer>
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
