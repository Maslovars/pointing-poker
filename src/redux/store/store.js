/* eslint-disable */

import { configureStore } from "@reduxjs/toolkit";
import { appState } from '../reducers/reducer';

const reducers = { appState };

export const store = configureStore({ reducer: { ...reducers } });