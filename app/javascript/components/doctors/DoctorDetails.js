/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-key */
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

function DoctorDetails() {
  const storeDoctors = useSelector((state) => state.doctorReducer);
  const { id } = useParams();
  const [value, onChange] = useState(new Date());

  useEffect(() => {

  }, []);

  return (
    <div>
      <div className="doctor">
        {storeDoctors.filter((doctor) => doctor.id == id).map((doc) => (
          <ul>
            <li>
              {doc.name}
            </li>
            <li>
              {doc.email}
            </li>
            <li>
              {doc.phone}
            </li>
          </ul>
        ))}
      </div>
      <form action="/api/v1/appointments" method="post">
        <label>book and appointment</label>
        <input type="date" id="appointment_date" name="appointment_date" />
        <select name="appointment_time" id="appointment_time">
          <option value="9">9:00</option>
          <option value="9:30">9:30</option>
          <option value="10">10:00</option>
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
        <input type="submit" value="Submit" />
      </form>

    </div>

  );
}

export default DoctorDetails;
