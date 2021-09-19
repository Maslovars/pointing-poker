import React from 'react';
import { UsersContainer } from './style';
import User from './user/User';
import { useSelector } from 'react-redux';


export default function Ussers() {
  const users = useSelector((state) => state.appState.users);
  
  return <UsersContainer>
    { users.map(user => <User key={user.userId} name={user.firstName} surname={user.lastName} position={user.position} ava='' master={user.isMaster} />) } 
  </UsersContainer>  
}