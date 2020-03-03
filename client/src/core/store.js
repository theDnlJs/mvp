import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';

import registerReducer from '../Components/Pages/RegisterPage/RegisterSlice';

const rootReducer = combineReducers({
  register: registerReducer
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: [ ...getDefaultMiddleware({serializableCheck: false})],
});