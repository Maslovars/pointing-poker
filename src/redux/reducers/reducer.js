import { createReducer } from '@reduxjs/toolkit';
import { initState } from '../config/initState';
import {
  plus_count
} from '../actions/actions.js'

export const appState = createReducer(initState, builder =>
  builder
    .addCase(plus_count, (state, action) => {
      const newState = state;
      newState.counter.count += 1;
      return newState
    })
    .addDefaultCase(() => {})   
)