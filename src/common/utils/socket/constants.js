import randomWords from "random-words";

export const CONNECT_LOBBY = "connect_lobby";
export const GET_GAME_DATA = "get_game_data";
export const GAME_DATA = "game_data";
export const GAMES_LIST = "games_list";
export const LOBBY_CONNECTED = "lobby_connected";
export const JOIN_GAME = "join_game";
export const RECEIVE_MESSAGE = "receive_message";
export const SENT_MESSAGE = "sent_message";
export const USER_CONNECTED = "user_connected";
export const USER_DISCONNECTED = "user_disconnected";
export const GAME_ID = randomWords({ exactly: 2, join: "-" });
export const KICK_PLAYER = 'kick_player';
export const LEAVE_GAME = 'leave_game';
export const BLOCK_APP = 'block_app';