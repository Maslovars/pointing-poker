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
  const { startGameHandler } = props;
  const url = window.location.href;
  const users = useSelector((state) => state.appState.users);
  const userId = socket.id;
  const userData = users.find((user) => user.userId === userId);
  const gameId = useLocation().pathname.replace("/lobby/", "");

  const leaveHandler = () => {
    socket.emit(LEAVE_GAME, { gameId, userId });
  };
  const copyHandler = () => {
    const link = document.getElementById("link");
    link.select();
    document.execCommand("copy");
  };

  return (
    <Wrapper>
      {!userData && <Redirect to="/" />}
      <UserContainer>
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
          {!!userData && userData.isMaster && (
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
        <LeaveButton
          type="button"
          defaultValue="LEAVE LOBBY"
          onClick={leaveHandler}
        />
      </UserContainer>
      <UsersContainer>
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
}

Ussers.defaultProps = {
  startGameHandler: () => console.warn('Users startGameHandler was not defined.'),
}
