import { useFormik } from "formik";
import { useState, useEffect } from "react";
import Switch from 'react-input-switch';
import Button from "../button/Button";
import Input from "../input/Input";
import { socket } from "../../common/utils/socket/socket";
import {
    JOIN_ROOM,
    RECEIVE_MESSAGE,
    SEND_MESSAGE,
    USER_CONNECTED,
    USER_DISCONNECTED,
    ROOM_ID
} from '../../common/utils/socket/constants';
import { StyledButtonGroup, StyledConnectionForm, StyledForm, StyledHeading } from "./style";
import FileUploader from "../fileUploader/FileUploader";

const ConnectionForm = () => {

    const [value, setValue] = useState('Connect as observer');
    const [usersData, setUsersData] = useState([]);

    const formik = useFormik({
        initialValues: {
            firstName: "",
            lastName: "",
            position: "",
            room: "",
            ava: "",
            // isObserver: false
        },
        onSubmit: values => {

            joinSocketRoom(values);
        }

    })

    const handleUserConnect = (userId) => {
        //handleIncomingMessage({ message: `${userId} connected` })
    }

    const handleUserDisconnect = (userId) => {
        // handleIncomingMessage({ message: `${userId} disconnected` })
    }

    const joinSocketRoom = (userData) => {

        if (userData) {
            socket.emit(JOIN_ROOM, {
                room: userData.room || ROOM_ID,
                id: socket.id,
                //убрать id
                firstName: userData.firstName,
                lastName: userData.lastName

            })
        }

    }

    const addSocketListeners = () => {
        //socket.on(RECEIVE_MESSAGE, handleIncomingMessage)
        socket.on('SHOW_USERS', (data) => {
            setUsersData(data);
        })
        socket.on(USER_CONNECTED, handleUserConnect)
        socket.on(USER_DISCONNECTED, handleUserDisconnect)
    }

    const removeSocketListeners = () => {
        //socket.off(RECEIVE_MESSAGE, handleIncomingMessage)
        socket.off(USER_CONNECTED, handleUserConnect)
        socket.off(USER_DISCONNECTED, handleUserDisconnect)
    }

    const leaveRoomHandler = () => {
        if (socket.id) {
            socket.emit('LEAVE_ROOM', socket.id);
            setUsersData({});
        }
    };

    useEffect(() => {
        joinSocketRoom();
        addSocketListeners();
        return () => removeSocketListeners();
    }, [])


    return (
        <StyledConnectionForm>
            <StyledHeading>
                {usersData.length > 0 ? `Connected to lobby room: ${usersData[0].room}` : `Connect to Lobby`}
            </StyledHeading>
            {usersData.length > 0 && usersData.map(user => <div key={user.id}>USER ID: {user.id} - Firstname: {user.firstName}</div>)}
            {value}
            <Switch on="Connect as player" off="Connect as observer" value={value} onChange={setValue} />


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
                    required />

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
                    <Button type="button" color="white" text="Cancel" height="big" />
                </StyledButtonGroup>

            </StyledForm>
            {/* <Button onClick={leaveRoomHandler} type="button" color="white" text="Leave" height="big" /> */}

        </StyledConnectionForm>
    )
}

export default ConnectionForm;
