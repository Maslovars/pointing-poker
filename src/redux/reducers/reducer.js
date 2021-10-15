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
  deleteIssue,
  replaceIssue,
  selectIssue,
  updateData,
} from '../actions/actions.js'
import { act } from '@testing-library/react';

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
      if (action.payload.name.length > 10) { action.payload.title = `${action.payload.name.slice(0, 10)}...` }
      else { action.payload.title = action.payload.name }
      switch (action.payload.priority) {
        case priorityTypes.low: newState.issues.lowSet.push(action.payload); break;
        case priorityTypes.middle: newState.issues.middleSet.push(action.payload); break;
        case priorityTypes.hight: newState.issues.hightSet.push(action.payload); break;
        default: return;
      }
      newState.issues.issuesSet = newState.issues.hightSet.concat(newState.issues.middleSet, newState.issues.lowSet);
      return newState;
    })
    .addCase(deleteIssue, (state, action) => {
      const newState = state;
      let index = -1;
      if (action.payload.priority === priorityTypes.low) {
        newState.issues.lowSet.map((issue, ind) => { if (issue.id === action.payload.issueId) { index = ind } });
        if (index !== -1) {
          newState.issues.lowSet.splice(index, 1);
          newState.issues.issuesSet = newState.issues.hightSet.concat(newState.issues.middleSet, newState.issues.lowSet);
        }
      }
      if (action.payload.priority === priorityTypes.middle) {
        newState.issues.middleSet.map((issue, ind) => { if (issue.id === action.payload.issueId) { index = ind } });
        if (index !== -1) {
          newState.issues.middleSet.splice(index, 1);
          newState.issues.issuesSet = newState.issues.hightSet.concat(newState.issues.middleSet, newState.issues.lowSet);
        }
      }
      if (action.payload.priority === priorityTypes.hight) {
        newState.issues.hightSet.map((issue, ind) => { if (issue.id === action.payload.issueId) { index = ind } });
        if (index !== -1) {
          newState.issues.hightSet.splice(index, 1);
          newState.issues.issuesSet = newState.issues.hightSet.concat(newState.issues.middleSet, newState.issues.lowSet);
        }
      }
      return newState;
    })
    .addCase(replaceIssue, (state, action) => {
      const newState = state;
      const { name, id, oldPriority, priority, link } = action.payload;
      let title;
      if (name.length > 10) { title = `${name.slice(0, 10)}...` }
      else { title = name }
      const newIssue = { name, priority, id, link, title };
      let index = -1;
      if (oldPriority === priorityTypes.low) {
        newState.issues.lowSet.map((issue, ind) => { if (issue.id === id) { index = ind } });
        if (index !== -1 && oldPriority === priority) {
          newState.issues.lowSet.splice(index, 1, newIssue);
          newState.issues.issuesSet = newState.issues.hightSet.concat(newState.issues.middleSet, newState.issues.lowSet);
        } else {
          newState.issues.lowSet.splice(index, 1);
          switch (priority) {
            case priorityTypes.middle: newState.issues.middleSet.push(newIssue); break;
            case priorityTypes.hight: newState.issues.hightSet.push(newIssue); break;
            default: return;
          }
          newState.issues.issuesSet = newState.issues.hightSet.concat(newState.issues.middleSet, newState.issues.lowSet);
        }
      }
      if (oldPriority === priorityTypes.middle) {
        newState.issues.middleSet.map((issue, ind) => { if (issue.id === id) { index = ind } });
        if (index !== -1 && oldPriority === priority) {
          newState.issues.middleSet.splice(index, 1, newIssue);
          newState.issues.issuesSet = newState.issues.hightSet.concat(newState.issues.middleSet, newState.issues.lowSet);
        } else {
          newState.issues.middleSet.splice(index, 1);
          switch (priority) {
            case priorityTypes.low: newState.issues.lowSet.push(newIssue); break;
            case priorityTypes.hight: newState.issues.hightSet.push(newIssue); break;
            default: return;
          }
          newState.issues.issuesSet = newState.issues.hightSet.concat(newState.issues.middleSet, newState.issues.lowSet);
        }
      }
      if (oldPriority === priorityTypes.hight) {
        newState.issues.hightSet.map((issue, ind) => { if (issue.id === id) { index = ind } });
        if (index !== -1 && oldPriority === priority) {
          newState.issues.hightSet.splice(index, 1, newIssue);
          newState.issues.issuesSet = newState.issues.hightSet.concat(newState.issues.middleSet, newState.issues.lowSet);
        } else {
          newState.issues.hightSet.splice(index, 1);
          switch (priority) {
            case priorityTypes.middle: newState.issues.middleSet.push(newIssue); break;
            case priorityTypes.low: newState.issues.hightSet.push(newIssue); break;
            default: return;
          }
          newState.issues.issuesSet = newState.issues.hightSet.concat(newState.issues.middleSet, newState.issues.lowSet);
        }
      }
      return newState;
    })
    .addCase(selectIssue, (state, action) => {
      const newState = state;
      newState.issues.issuesSet.forEach(issue => {
        if (issue.id === action.payload) { issue.selected === true ? issue.selected = false : issue.selected = true } else { issue.selected = false }
      })
      return newState;
    })
    .addCase(updateData, (state, action) => {
      const newState = state;
      const users = action.payload.users;
      const cards = action.payload.cards;
      const issues = action.payload.issues;
      const gameSettings = action.payload.gameSettings;
      if (users) { newState.users = users }
      if (cards) { newState.cards.cardsSet = cards }
      if (issues) { newState.issues.issuesSet = issues }
      if (gameSettings) { newState.gameSettings = gameSettings }
      return newState;
    })
    .addDefaultCase(() => { })
)