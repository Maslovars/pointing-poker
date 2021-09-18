/* eslint-disable */

import { useFormik } from "formik";
import { useState, useEffect } from "react";
import Switch from "react-input-switch";
import Button from "../button/Button";
import Input from "../input/Input";
import { socket } from "../../common/utils/socket/socket";
import {
  JOIN_ROOM,
  RECEIVE_MESSAGE,
  SEND_MESSAGE,
  USER_CONNECTED,
  USER_DISCONNECTED,
  ROOM_ID,
} from "../../common/utils/socket/constants";
import {
  StyledButtonGroup,
  StyledConnectionForm,
  StyledForm,
  StyledHeading,
} from "./style";
import FileUploader from "../fileUploader/FileUploader";

const ConnectionForm = (props) => {
  const {mode, session, handlePopup} = props;
  const [value, setValue] = useState("Connect as observer");
  const [usersData, setUsersData] = useState([]);
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      position: "",
      ava: "",
      isObserver: false
    },
    onSubmit: (values) => {
      mode === 'game' ? createNewGame(values) : joinSocketRoom(values);
    },
  });

  function createNewGame(values) {
    socket.emit('create_session', {sessionName: session, user: {
      name: values.firstName,
      surname: values.lastName,
      position: values.position,
      image: values.ava,
      isObserver: values.isObserver,
    }} )
    handlePopup();
  }

  
  function joinSocketRoom(values) {
    socket.emit('join_game', {sessionName: session, user: {
      name: values.firstName,
      surname: values.lastName,
      position: values.position,
      image: values.ava,
      isObserver: values.isObserver,
    }} )
    handlePopup();    
  };

  return (
    <StyledConnectionForm>
      <StyledHeading>
        { mode === 'game'
          ? `Create new room`
          : `Connect to room`}
      </StyledHeading>
      {usersData.length > 0 &&
        usersData.map((user) => (
          <div key={user.id}>
            USER ID: {user.id} - Firstname: {user.firstName}
          </div>
        ))}
      {mode !== 'game' && value}
      {mode !== 'game' && <Switch
        id='isObserver'
        on="Connect as player"
        off="Connect as observer"
        value={value}
        onChange={setValue}
      />}

      <StyledForm onSubmit={formik.handleSubmit}>
        <Input
          text="Your first name:"
          id="firstName"
          name="firstName"
          type="text"
          width="big"
          fontWeight="bold"
          onChange={formik.handleChange}
          value={formik.values.firstName}
          required
        />

        <Input
          text="Your last name (optional):"
          id="lastName"
          name="lastName"
          type="text"
          width="big"
          fontWeight="bold"
          onChange={formik.handleChange}
          value={formik.values.lastName}
        />

        <Input
          text="Your job position (optional):"
          id="position"
          name="position"
          type="text"
          width="big"
          fontWeight="bold"
          onChange={formik.handleChange}
          value={formik.values.position}
        />

        <FileUploader />

        {/* <Input
                    text="Room name (temporary field for users to join room):"
                    id="room"
                    name="room"
                    type="text"
                    width="big"
                    fontWeight="bold"
                    onChange={formik.handleChange}
                    value={formik.values.room}
                /> */}
        <StyledButtonGroup>
          <Button text="Confirm" height="big" type="submit" />
          <Button type="button" color="white" text="Cancel" height="big" onClick={handlePopup}/>
        </StyledButtonGroup>
      </StyledForm>
      {/* <Button onClick={leaveRoomHandler} type="button" color="white" text="Leave" height="big" /> */}
    </StyledConnectionForm>
  );
};

export default ConnectionForm;
