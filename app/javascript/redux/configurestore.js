import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { doctorReducer } from './Doctors';

const reducer = combineReducers({
  doctorReducer,
});

export const store = createStore(
  reducer,
  applyMiddleware(thunk, logger),
);
