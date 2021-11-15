/* eslint-disable no-restricted-globals */
/* eslint-disable no-alert */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

import './Bookappointment.css';

function DoctorAppointment() {
  const { id } = useParams();
  const appointments = useSelector((state) => state.appointmentReducer);

  function onSubmit(e) {
    document.querySelector('.popup-box').style.display = 'none';
    const date = document.getElementById('appointment_date').value;
    const time = document.getElementById('appointment_time').value;
    const doctorId = parseInt(id, 10);
    if ((appointments.filter((appointment) => appointment.appointment_time === time).length > 0)
    && (appointments.filter((appointment) => appointment.appointment_date === date).length > 0)
    && (appointments.filter((appointment) => appointment.doctor_id === doctorId).length > 0)) {
      alert('appointment not available');
      e.preventDefault();
    }

  }

  return (
    <div className="popup-box">
      <form action="http://localhost:3000/api/v1/appointments" method="post" className="box form-group">
        <div>
          <h4>Choose a date and time</h4>
        </div>
        <div className="close-btn d-flex">
          <span className="close-icon" onClick={onSubmit}>x</span>
        </div>
        {DoctorAppointment.content}
        <input className="date-input" type="date" id="appointment_date" name="exampleInputDate1" />
        <select className="time-select" name="appointment_time" id="appointment_time">
          <option value="9:00">9:00</option>
          <option value="9:30">9:30</option>
          <option value="10:00">10:00</option>
          <option value="10:30">10:30</option>
          <option value="11:00">11:00</option>
          <option value="11:30">11:30</option>
          <option value="12:00">12:00</option>
          <option value="12:30">12:30</option>
          <option value="13:00">13:00</option>
          <option value="13:30">13:30</option>
          <option value="14:00">14:00</option>
          <option value="14:30">14:30</option>
          <option value="15:00">15:00</option>
          <option value="15:30">15:30</option>
          <option value="16:00">16:00</option>
          <option value="16:30">16:30</option>
          <option value="17:00">17:00</option>
          <option value="17:30">17:30</option>
          <option value="18:00">18:00</option>
        </select>
        <input type="hidden" id="doctor_id" name="doctor_id" value={id} />
        <div className="submit-appointment-div">
          <input className="submit-appointment" type="submit" value="Submit" onClick={onSubmit} />
        </div>
      </form>
    </div>

  );
}

export default DoctorAppointment;
