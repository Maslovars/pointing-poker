import React, { useState, useEffect } from 'react';
import { socket } from "../../common/utils/socket/socket";
import { PropTypes } from 'prop-types';
import User from '../ussers/user/User';
import {
    StyledButton,
    StyledChat,
    StyledChatField,
    StyledChatForm,
    StyledInput,
    StyledMessage,
    StyledText
} from './style';

import {
    GET_CHAT_MESSAGES,
    SEND_CHAT_MESSAGE,
    CHAT_MESSAGES,
} from '../../common/utils/socket/constants';



const Chat = ({ room, users, userId }) => {

    const [messages, setMessages] = useState([]);
    const [message, setMessage] = useState('');
    console.log(users)
    const getMessages = () => {
        socket.emit(GET_CHAT_MESSAGES, room);
    }
    const sendMessage = (message) => {
        socket.emit(SEND_CHAT_MESSAGE, { room, userId, message });
        setMessage('');
    }

    const addSocketListeners = () => {
        socket.on(CHAT_MESSAGES, (messages) => {
            setMessages(messages);
        })
    }
    const removeSocketListeners = () => {
        socket.on(CHAT_MESSAGES, (messages) => {
            setMessages(messages);
        })
    }
    const handleChangeMessage = e => {
        setMessage(e.target.value);
    }

    const handleSendMessage = (e) => {
        e.preventDefault();
        sendMessage(message);
    }

    useEffect(() => {
        getMessages();
        addSocketListeners();
        return () => {
            removeSocketListeners();
        }
    }, [])

    const userList = messages.map((message, idx) => {
        const currentUser = users.find(user => user.userId === message.userId);
        return (
            <StyledMessage key={idx}>
                <StyledText>{message.message}</StyledText>
                <StyledText>
                    <User
                        key={currentUser.userId}
                        id={currentUser.userId}
                        name={currentUser.firstName}
                        surname={currentUser.lastName}
                        position={currentUser.position}
                        ava={currentUser.ava}
                        master={true}
                        room={room}
                        width="small"
                        height="small"
                    />
                </StyledText>

            </StyledMessage>
        )
    })

    return (<StyledChat>
        <StyledChatField>{userList}
        </StyledChatField>
        <StyledChatForm onSubmit={handleSendMessage}><StyledInput type="text" value={message} maxLength="50" onChange={handleChangeMessage}></StyledInput><StyledButton disabled={!message.length > 0} type="submit">Send</StyledButton></StyledChatForm>

    </StyledChat>
    )
}
Chat.propTypes = {
    room: PropTypes.string,
    userId: PropTypes.string,
    users: PropTypes.array,
}
export default Chat;