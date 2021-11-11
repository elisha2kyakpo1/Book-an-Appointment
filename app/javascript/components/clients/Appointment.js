/* eslint-disable max-len */
/* eslint-disable react/jsx-key */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getClientAppointments } from '../redux/Appointments';
import './appointment.css';

function Appointment() {
  const clientAppointments = useSelector((state) => state.clientAppointmentReducer);
  const doctors = useSelector((state) => state.doctorReducer);
  if (!localStorage.getItem('stored_doctors') || doctors.length > localStorage.getItem('current_number_of_doctors')) {
    localStorage.setItem('stored_doctors', JSON.stringify(doctors));
  }

  const storedDoctors = JSON.parse(localStorage.getItem('stored_doctors'));
  localStorage.setItem('current_number_of_doctors', storedDoctors.length);

  const dispatch = useDispatch();

  useEffect(() => {
    if (!clientAppointments.length) {
      dispatch(getClientAppointments());
    }
  }, []);

  return (
    <div>
      <h1>My appointments</h1>
      <div className="row">
        {clientAppointments.map((appointment) => (
          <div className="col-12 col-md-6 col-lg-4">
            <div className="appointment">
              <div>
                Appointment Date&nbsp;&nbsp;
                {appointment.appointment_date}
              </div>
              <div>
                Time&nbsp;&nbsp;
                {appointment.appointment_time}
              </div>
              <div className="d-flex p-2">
                Doctor's Name&nbsp;&nbsp;
                {storedDoctors.filter((doctor) => doctor.id === appointment.doctor_id).map((doctor) => (
                  <div>{doctor.name}</div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Appointment;
