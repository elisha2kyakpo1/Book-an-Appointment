/* eslint-disable react/jsx-key */
import React from 'react';
import { useSelector } from 'react-redux';

function Appointment() {
  const clientAppointments = useSelector((state) => state.clientAppointmentReducer);

  return (
    <div>
      <h1>My appointments</h1>
      {clientAppointments.map((appointment) => (
        <div>
          {appointment.appointment_date}
          {appointment.appointment_time}
        </div>
      ))}
    </div>
  );
}

export default Appointment;
