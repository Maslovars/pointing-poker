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
export const KICK_PLAYER = "kick_player";
export const LEAVE_GAME = "leave_game";
export const BLOCK_APP = "block_app";
export const SET_GAME_DATA = "set_game_data";
export const START_GAME = "start_game";
export const GAME_STARTED = "game_started";
export const GET_GAMES_LIST = "get_games_list";
export const PLAY_GAME_DATA = "play_game_data";
export const GET_PLAY_GAME_DATA = "get_play_game_data";
export const RESULTS_DATA = "resuts_data";
// ====== chat
export const GET_CHAT_MESSAGES = "get_chat_messages";
export const SEND_CHAT_MESSAGE = "send_chat_message";
export const CHAT_MESSAGES = "chat_messages";
//======= lobby-guard 
export const GAME_ID_EXISTS = "game_id_exists";
export const CHECK_GAME_ID = "check_game_id";
