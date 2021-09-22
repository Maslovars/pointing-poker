import React from 'react';
import { User, Avatar, AvatarImage, TextContainer, ImgButton } from './style';
import { PropTypes } from 'prop-types';
import del from '../../../assets/delete-users.png';
import { socket } from '../../../common/utils/socket/socket';
import { KICK_PLAYER } from '../../../common/utils/socket/constants';

export default function UserCard(props) {
  const { name, surname, ava, position, master, id, room } = props;
  let avaText;
  const secondLetter = surname ? surname[0] : ''
  if (!ava) { avaText = (name[0] + secondLetter).toUpperCase() }

  const clickHandler = (userToKickId) => {
    socket.emit(KICK_PLAYER, { room, id: userToKickId });
  }

  return <User>
    { !ava && <Avatar>{avaText}</Avatar> }
    { ava && <AvatarImage src={ava} alt="" /> }
    <TextContainer>
      <p>{name}</p>
      {surname && <p>{surname}</p>}
      {position && <p>{position}</p>}
    </TextContainer>
    { !master && <ImgButton id={id} type='image' src={del} onClick={(event) => clickHandler(event.target.id)} /> }
  </User>
}

UserCard.propTypes = {
  name: PropTypes.string.isRequired,
  surname: PropTypes.string,
  ava: PropTypes.string,
  position: PropTypes.string,
  master: PropTypes.bool.isRequired,
  id: PropTypes.string.isRequired,
  room: PropTypes.string.isRequired,
}

UserCard.defaultProps = {
  surname: '',
  ava: '',
  position: '',
}