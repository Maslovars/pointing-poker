import React from 'react';
import { User, Avatar, AvatarImage, TextContainer, ImgButton } from './style';
import { PropTypes } from 'prop-types';
import del from '../../../assets/delete-users.png';
import { socket } from '../../../common/utils/socket/socket';
import {Image} from "cloudinary-react";
import { KICK_PLAYER } from '../../../common/utils/socket/constants';

export default function UserCard(props) {
  const { name, surname, ava, position, master, id } = props;
  let avaText;
  const secondLetter = surname ? surname[0] : ''
  if (!ava) { avaText = (name[0] + secondLetter).toUpperCase() }

  const clickHandler = () => {
    socket.emit(KICK_PLAYER, id);
  }

  return <User>
    { !ava && <Avatar>{avaText}</Avatar> }
    { ava && <AvatarImage><Image cloudName={process.env.REACT_APP_CLOUDINARY_CLOUD_NAME} publicId={ava} width="50" height="50" crop="fill"/></AvatarImage>}
    <TextContainer>
      <p>{name}</p>
      {surname && <p>{surname}</p>}
      {position && <p>{position}</p>}
    </TextContainer>
    { !master && <ImgButton type='image' src={del} onclick={clickHandler} /> }
  </User>
}

UserCard.propTypes = {
  name: PropTypes.string.isRequired,
  surname: PropTypes.string,
  ava: PropTypes.string,
  position: PropTypes.string,
  master: PropTypes.bool.isRequired,
  id: PropTypes.string.isRequired,
}

UserCard.defaultProps = {
  surname: '',
  ava: '',
  position: '',
}