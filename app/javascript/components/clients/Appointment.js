/* eslint-disable react/jsx-key */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getClientAppointments } from '../redux/Appointments';

function Appointment() {
  const clientAppointments = useSelector((state) => state.clientAppointmentReducer);

  const dispatch = useDispatch();

  useEffect(() => {
    if (!clientAppointments.length) {
      dispatch(getClientAppointments());
    }
  }, []);

  return (
    <div>
      <h1>My appointments</h1>
      {clientAppointments.map((appointment) => (
        <div>
          <div>
            Appointment Date&nbsp;&nbsp;
            {appointment.appointment_date}
          </div>
          <div>
            Time&nbsp;&nbsp;
            {appointment.appointment_time}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Appointment;
