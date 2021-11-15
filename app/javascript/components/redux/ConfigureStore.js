/* eslint-disable import/prefer-default-export */
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { doctorReducer } from './Doctors';
import { appointmentReducer, clientAppointmentReducer } from './Appointments';

const reducer = combineReducers({
  doctorReducer,
  appointmentReducer,
  clientAppointmentReducer,
});

export const store = createStore(
  reducer,
  applyMiddleware(thunk, logger),
);
