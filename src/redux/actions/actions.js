import { createAction } from "@reduxjs/toolkit";
import { 
  EDIT_CARD,
  EDIT_CARD_CANCEL,
  EDIT_CARD_ACCEPT,
  DELETE_CARD,
  ADD_NEW_CARDS,
  SELECT_CARD,
 } from './constants';

export const editCard = createAction(EDIT_CARD);
export const editCardCancel = createAction(EDIT_CARD_CANCEL);
export const editCardAccept = createAction(EDIT_CARD_ACCEPT);
export const deleteCard = createAction(DELETE_CARD);
export const addNewCards = createAction(ADD_NEW_CARDS);
export const selectCard = createAction(SELECT_CARD);
