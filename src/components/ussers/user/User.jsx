import React from 'react';
import { User, Avatar, AvatarImage, TextContainer, ImgButton } from './style';
import { PropTypes } from 'prop-types';
import del from '../../../assets/delete-users.png';

export default function UserCard(props) {
  const { name, surname, ava, position, master } = props;
  let avaText;
  const secondLetter = surname ? surname[0] : ''
  if (!ava) { avaText = (name[0] + secondLetter).toUpperCase() }

  return <User>
    { !ava && <Avatar>{avaText}</Avatar> }
    { ava && <AvatarImage src={ava} alt="" /> }
    <TextContainer>
      <p>{name}</p>
      {surname && <p>{surname}</p>}
      {position && <p>{position}</p>}
    </TextContainer>
    { !master && <ImgButton type='image' src={del} /> }
  </User>
}

UserCard.propTypes = {
  name: PropTypes.string.isRequired,
  surname: PropTypes.string,
  ava: PropTypes.string,
  position: PropTypes.string,
  master: PropTypes.bool.isRequired,
}

UserCard.defaultProps = {
  surname: '',
  ava: '',
  position: '',
}