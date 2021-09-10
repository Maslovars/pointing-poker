import { createReducer } from '@reduxjs/toolkit';
import { initState } from '../config/initState';
import { CardType, defaultNames } from '../../components/cards/constants'
import {
  editCard,
  editCardCancel,
  editCardAccept,
  deleteCard,
  openCloseSettings,
  addNewCards,
  selectCard
} from '../actions/actions.js'

export const appState = createReducer(initState, builder =>
  builder
    .addCase(editCard, (state, action) => {
      const newState = state;
      newState.cards.cardsSet[action.payload].type = CardType.edit;
      return newState;
    })
    .addCase(editCardCancel, (state, action) => {
      const newState = state;
      newState.cards.cardsSet[action.payload].type = CardType.playCard;
      return newState;
    })
    .addCase(editCardAccept, (state, action) => {
      const newState = state;
      newState.cards.cardsSet[action.payload.id].type = CardType.playCard;
      if (action.payload.name) { newState.cards.cardsSet[action.payload.id].name = action.payload.name }
      if (action.payload.value) { newState.cards.cardsSet[action.payload.id].value = action.payload.value }
      return newState;
    })
    .addCase(deleteCard, (state, action) => {
      const newState = state;
      const index = action.payload;
      newState.cards.cardsSet.splice(index, 1);
      return newState;
    })
    .addCase(openCloseSettings, (state, action) => {
      const newState = state;
      newState.cards.settingsMode = action.payload;
      return newState;
    })
    .addCase(addNewCards, (state, action) => {
      const newState = state;
      const array = action.payload;
      if (array.length === 1 && array[0].addCheck === true) {
        if (array[0].name === '') {
          array[0].name = defaultNames[array[0].type];
          array[0].value = defaultNames[array[0].type];
        } else { array[0].value = array[0].name }
      }
      newState.cards.cardsSet.unshift(...array);
      return newState;
    })
    .addCase(selectCard, (state, action) => {
      const newState = state;
      newState.cards.cardsSet.forEach((card, index) => {
        index === Number(action.payload) ? card.selected = true : card.selected = false;
      });
      newState.cards.value = String(newState.cards.cardsSet[action.payload].value);
      return newState;
    })
    .addDefaultCase(() => {})   
)