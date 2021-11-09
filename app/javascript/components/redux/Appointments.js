/* eslint-disable camelcase */
const GET_APPOINTMENTS = 'APPOINTMENTS/GET_APPOINTMENTS';

const loadAppointments = (json) => ({
  type: GET_APPOINTMENTS,
  json,
});

const getAppointments = () => (dispatch) => {
  fetch('api/v1/appointments')
    .then((response) => response.json())
    .then((json) => dispatch(loadAppointments(json)));
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

export {
  appointmentReducer,
  getAppointments,
};
