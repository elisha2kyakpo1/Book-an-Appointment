/* eslint-disable no-restricted-globals */
/* eslint-disable no-alert */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import './Bookings.css';

const addDate = (payload) => {
  const dateDetails = { ...payload };
  fetch('http://localhost:3000/api/v1/appointments', {
    method: 'POST',
    body: JSON.stringify(dateDetails),
    headers: {
      'content-type': 'application/json',
    },
  }).then((response) => response.json);
};

const DoctorAppointment = () => {
  const [closeBtn, setCloseBtn] = useState(false);

  const { id } = useParams();
  const onSubmitBtn = (e) => {

    e.preventDefault();
    if (appointmentTime && appointmentDate) {
      dispatch(addDate({ appointmentDate, appointmentTime }));
      setAppointment(appointments[0]);
      e.target.reset();
    }
  }

  const appointments = ['09:00', '09:30', '10:00', '10:30', '11:00', '11:30', '12:00', '12:30', '13:00', '14:00', '14:30'];

  const dispatch = useDispatch();
  const [appointmentDate, setDate] = useState('');
  const [appointmentTime, setAppointmentTime] = useState('');

  return (
    <div className="popup-box">
      <form onSubmit={onSubmitBtn} method="post" className="box form-group">
        <div>
          <h4>Choose a date and time</h4>
        </div>
        <div className="close-btn d-flex">
          <span className="close-icon" onClick={() => setCloseBtn(!closeBtn)}>x</span>
        </div>
        {DoctorAppointment.content}
        <input className="date-input" type="date" id="appointment_date" onChange={(date) => setDate(date.target.value)} name="exampleInputDate1" />
        <select className="time-select" name="appointment_time" id="appointment_time" onChange={(appointment) => setAppointmentTime(appointment.target.value)}>
          {appointments.map((appointment) => (
            <option className="options" key={appointment} value={appointment}>{appointment}</option>
          ))}
        </select>
        <input type="hidden" id="doctor_id" name="doctor_id" value={id} />
        <div className="submit-appointment-div">
          <input className="submit-appointment" type="submit" value="Submit" />
        </div>
      </form>
    </div>

  );
};

export default DoctorAppointment;
