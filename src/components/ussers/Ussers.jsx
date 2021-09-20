import React from 'react';
import { UsersContainer, UserWrapper, LeaveButton, Wrapper, UserContainer } from './style';
import User from './user/User';
import { useSelector } from 'react-redux';
import { socket } from '../../common/utils/socket/socket';
import { LEAVE_GAME } from '../../common/utils/socket/constants';
import { useLocation, Redirect } from 'react-router-dom';

export default function Ussers() {
  const users = useSelector((state) => state.appState.users);
  const userId = socket.id;
  const userData = users.find((user) => user.userId === userId);
  const gameId = useLocation().pathname.replace('/lobby/', '');
  
  const leaveHandler = () => { socket.emit(LEAVE_GAME, { gameId, userId }) };

  return <Wrapper>
    { !userData && <Redirect to='/' /> }
    <UserContainer>
      <UserWrapper>
      { !!userData && <User id={userData.userId} name={userData.firstName} surname={userData.lastName} position={userData.position} ava='' master={true} /> }
      </UserWrapper>
      <LeaveButton type='button' value='LEAVE LOBBY' onClick={leaveHandler}/>
    </UserContainer>
    <UsersContainer>
      { users.map(user => user.userId !== userId && <User key={user.userId} id={user.userId} name={user.firstName} surname={user.lastName} position={user.position} ava='' master={user.isMaster} />) }
    </UsersContainer>
  </Wrapper>  
}