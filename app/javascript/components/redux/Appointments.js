/* eslint-disable camelcase */
const GET_APPOINTMENTS = 'APPOINTMENTS/GET_APPOINTMENTS';
const GET_CLIENT_APPOINTMENTS = 'APPOINTMENTS/GET_CLIENT_APPOINTMENTS';

const loadAppointments = (json) => ({
  type: GET_APPOINTMENTS,
  json,
});

const loadClientAppointments = (json) => ({
  type: GET_CLIENT_APPOINTMENTS,
  json,
});

const getAppointments = () => (dispatch) => {
<<<<<<< HEAD
  fetch('api/v1/appointments')
=======
  fetch('http://localhost:3000/api/v1/appointments')
>>>>>>> fddb78ab8beb0272cdbc7693b0d3492bb397062a
    .then((response) => response.json())
    .then((json) => dispatch(loadAppointments(json)));
};

const getClientAppointments = () => (dispatch) => {
<<<<<<< HEAD
  fetch('api/v1/appointments/1')
=======
  fetch('http://localhost:3000/api/v1/appointments')
>>>>>>> fddb78ab8beb0272cdbc7693b0d3492bb397062a
    .then((response) => response.json())
    .then((json) => dispatch(loadClientAppointments(json)));
};

const appointmentReducer = (state = [], action) => {
  switch (action.type) {
    case GET_APPOINTMENTS:
      return action.json.map((appointment) => {
        const {
          appointment_date,
          appointment_time,
          client_id,
          doctor_id,
        } = appointment;
        return {
          appointment_date,
          appointment_time,
          client_id,
          doctor_id,
        };
      });
    default:
      return state;
  }
};

const clientAppointmentReducer = (state = [], action) => {
  switch (action.type) {
    case GET_CLIENT_APPOINTMENTS:
      return action.json.map((appointment) => {
        const {
<<<<<<< HEAD
          appointment_date,
=======
          appointment_date_and_time,
>>>>>>> fddb78ab8beb0272cdbc7693b0d3492bb397062a
          appointment_time,
          client_id,
          doctor_id,
        } = appointment;
        return {
<<<<<<< HEAD
          appointment_date,
=======
          appointment_date_and_time,
>>>>>>> fddb78ab8beb0272cdbc7693b0d3492bb397062a
          appointment_time,
          client_id,
          doctor_id,
        };
      });
    default:
      return state;
  }
};

export {
  appointmentReducer,
  clientAppointmentReducer,
  getAppointments,
  getClientAppointments,
};
