import React from "react";
import { User, Avatar, AvatarImage, TextContainer, ImgButton } from "./style";
import { PropTypes } from "prop-types";
import del from "../../../assets/delete-users.png";
import { Image } from "cloudinary-react";
import { socket } from "../../../common/utils/socket/socket";
import { KICK_PLAYER } from "../../../common/utils/socket/constants";
export default function UserCard(props) {
  const { name, surname, ava, position, master, id, room, width, height } = props;
  let avaText;
  const secondLetter = surname ? surname[0] : "";
  if (!ava) {
    avaText = (name[0] + secondLetter).toUpperCase();
  }

  const clickHandler = (userToKickId) => {
    socket.emit(KICK_PLAYER, { room, userToKickId, id });
  };

  return (
    <User width={width} height={height} >
      {!ava && <Avatar width={width} height={height}>{avaText}</Avatar>}
      {ava && <AvatarImage width={width} height={height}><Image cloudName={process.env.REACT_APP_CLOUDINARY_CLOUD_NAME} publicId={ava} width="50" height="50" crop="fill" /></AvatarImage>}
      <TextContainer width={width} height={height}>
        <p>{name}</p>
        {surname && <p>{surname}</p>}
        {position && <p>{position}</p>}
      </TextContainer>
      {!master && (
        <ImgButton
          id={id}
          type="image"
          src={del}
          width={width}
          height={height}
          onClick={(event) => clickHandler(event.target.id)}
        />
      )}
    </User>
  );
}

UserCard.propTypes = {
  name: PropTypes.string.isRequired,
  surname: PropTypes.string,
  ava: PropTypes.string,
  position: PropTypes.string,
  master: PropTypes.bool.isRequired,
  id: PropTypes.string.isRequired,
  room: PropTypes.string.isRequired,
  width: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
};

UserCard.defaultProps = {
  surname: "",
  ava: "",
  position: "",
};
