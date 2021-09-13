/* eslint-disable */

import { createReducer } from '@reduxjs/toolkit';
import { initState } from '../config/initState';
import { CardType, defaultNames } from '../../components/cards/constants';
import { priorityTypes } from '../../components/issues/constants';
import {
  editCard,
  editCardCancel,
  editCardAccept,
  deleteCard,
  addNewCards,
  selectCard,
  addNewIssue,
} from '../actions/actions.js'

export const appState = createReducer(initState, builder =>
  builder
    .addCase(editCard, (state, action) => {
      const newState = state;
      if (!newState.cards.cardEditMode) {
        newState.cards.cardsSet[action.payload].type = CardType.edit;
        newState.cards.cardEditMode = true;
      } else { return }
      return newState;
    })
    .addCase(editCardCancel, (state, action) => {
      const newState = state;
      newState.cards.cardsSet[action.payload].type = CardType.playCard;
      newState.cards.cardEditMode = false;
      return newState;
    })
    .addCase(editCardAccept, (state, action) => {
      const newState = state;
      newState.cards.cardsSet[action.payload.id].type = CardType.playCard;
      if (action.payload.name) { newState.cards.cardsSet[action.payload.id].name = action.payload.name }
      if (action.payload.value) { newState.cards.cardsSet[action.payload.id].value = action.payload.value }
      newState.cards.cardEditMode = false;
      return newState;
    })
    .addCase(deleteCard, (state, action) => {
      const newState = state;
      const index = action.payload;
      newState.cards.cardsSet.splice(index, 1);
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
        if (index === Number(action.payload)) {
          if (card.selected === true) {
            card.selected = false;
            newState.cards.value = '';
          } else {
            card.selected = true;
            newState.cards.value = String(newState.cards.cardsSet[action.payload].value);
          }
        } else { card.selected = false }
      });
      return newState;
    })
    .addCase(addNewIssue, (state, action) => {
      const newState = state;
      if (action.payload.name.length > 12) { action.payload.name = `${action.payload.name.slice(0, 12)}...` }
      switch (action.payload.priority) {
        case priorityTypes.low: newState.issues.lowSet.push(action.payload); break;
        case priorityTypes.middle: newState.issues.middleSet.push(action.payload); break;
        case priorityTypes.hight: newState.issues.hightSet.push(action.payload); break;
        defauft: return;
      }
      newState.issues.issuesSet = newState.issues.hightSet.concat(newState.issues.middleSet, newState.issues.lowSet);
      return newState;
    })
    .addDefaultCase(() => {})   
)