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
    <div className="outter_container">
      <div className="contain mobile_container d-flex">
        <div className ="my-appointment">
          <h1 className="appointment_header text-center">My appointments</h1>
          <div className="row appointment_row">
            {clientAppointments.map((appointment) => (
              <div key={appointment.appointment_time} className="col-12 col-md-6 col-lg-4">
                <div className="appointment">
                  <div>
                    Date:&nbsp;&nbsp;
                    {appointment.appointment_date_and_time.substring(0, 10)}
                  </div>
                  <div>
                    Time:&nbsp;&nbsp;
                    {appointment.appointment_time}
                  </div>
                  <div>
                    Doctor:&nbsp;&nbsp;
                    {storedDoctors.filter((doctor) => doctor.id === appointment.doctor_id).map((doctor) => (
                      doctor.name
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Appointment;
