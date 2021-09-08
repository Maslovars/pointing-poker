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
    ROOM_ID } from '../../common/utils/socket/constants';

const ConnectionForm = () => {

    const [value, setValue] = useState('Connect as observer');

    const formik = useFormik({
        initialValues: {
            firstName: "",
            lastName: "",
            position: "",
            ava: "",
            // isObserver: "no"
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

        if (userData) { socket.emit(JOIN_ROOM, {
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
        socket.on('SHOW_USERS', (data) => { console.log(data)})
        socket.on(USER_CONNECTED, handleUserConnect)
        socket.on(USER_DISCONNECTED, handleUserDisconnect)
      }

      const removeSocketListeners = () => {
        //socket.off(RECEIVE_MESSAGE, handleIncomingMessage)
        socket.off(USER_CONNECTED, handleUserConnect)
        socket.off(USER_DISCONNECTED, handleUserDisconnect)
      }

      useEffect(() => {
        joinSocketRoom();
        addSocketListeners();
        return () => removeSocketListeners();
      }, [])


    return (
        <div>
            <h2>Connect to lobby</h2>
            <>
                {value}
                <Switch on="Connect as player" off="Connect as observer" value={value} onChange={setValue} />
            </>

            <form onSubmit={formik.handleSubmit}>
                <Input
                    text="Your first name:"
                    id="firstName"
                    name="firstName"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.firstName}
                    required />

                <Input
                    text="Your last name (optional):"
                    id="lastName"
                    name="lastName"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.lastName}
                />

                <Input
                    text="Your job position (optional):"
                    id="position"
                    name="position"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.position}
                />

                <label htmlFor="ava">Image:</label>
                <div>
                    <input
                        id="ava"
                        name="ava"
                        type="file"

                    />
                    <Button type="button" text="Button" />
                </div>
                <Button text="Confirm" height="big" type="submit" />
                <Button color="white" text="Cancel" height="big" />
            </form>
            
        </div>
    )
}

export default ConnectionForm;
