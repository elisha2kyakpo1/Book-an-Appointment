/* eslint-disable import/prefer-default-export */
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { doctorReducer } from './doctors';

const reducer = combineReducers({
  doctorReducer,
});

export const store = createStore(
  reducer,
  applyMiddleware(thunk, logger),
);
