import { createAction } from "@reduxjs/toolkit";
import { 
  EDIT_CARD,
  EDIT_CARD_CANCEL,
  EDIT_CARD_ACCEPT,
  DELETE_CARD,
  SET_SETTINGS_MODE,
  ADD_NEW_CARDS,
} from './constants';

export const editCard = createAction(EDIT_CARD);
export const editCardCancel = createAction(EDIT_CARD_CANCEL);
export const editCardAccept = createAction(EDIT_CARD_ACCEPT);
export const deleteCard = createAction(DELETE_CARD);
export const openCloseSettings = createAction(SET_SETTINGS_MODE);
export const addNewCards = createAction(ADD_NEW_CARDS);