import { combineReducers } from '@reduxjs/toolkit';
import { authSlice } from './app';

export const rootReducer = combineReducers({
  auth: authSlice.reducer,
});
