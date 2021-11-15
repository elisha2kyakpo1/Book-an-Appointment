/* eslint-disable no-alert */
/* eslint-disable no-empty */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/button-has-type */
/* eslint-disable react/jsx-key */
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import DoctorAppointment from '../clients/Doctorappointment';
import DoctorButton from './DoctorButton';
import Sidebar from '../menu/Sidebar';
import './Doctor.css';

function DoctorDetails() {
  const doctors = useSelector((state) => state.doctorReducer);
  const { id } = useParams();
  const doctorId = parseInt(id, 10);
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  if (!localStorage.getItem('stored_doctors') || doctors.length > localStorage.getItem('current_number_of_doctors')) {
    localStorage.setItem('stored_doctors', JSON.stringify(doctors));
  }

  const storedDoctors = JSON.parse(localStorage.getItem('stored_doctors'));
  localStorage.setItem('current_number_of_doctors', storedDoctors.length);

  return (
    <div className="outter_container">
      <div className="contain d-flex">
        <div className="display_doctor_navbar">
          <Sidebar />
        </div>
        <div className="doctor display_doctor">
          <div className="circle">
            <img
              src={storedDoctors.filter((doctor) => doctor.id === doctorId).map((doctor) => (
                doctor.image
              ))}
              alt="doctor"
            />
          </div>
          <div>
            {storedDoctors.filter((doctor) => doctor.id === doctorId).map((doctor) => (
              <div>{doctor.name}</div>
            ))}
          </div>
          <div>
            {storedDoctors.filter((doctor) => doctor.id === doctorId).map((doctor) => (
              <div>
                Email:
                {' '}
                {doctor.email}
              </div>
            ))}
          </div>
          <div>
            {storedDoctors.filter((doctor) => doctor.id === doctorId).map((doctor) => (
              <div>
                Phone Number:
                {doctor.phone}
              </div>
            ))}
          </div>
          <div>
            {storedDoctors.filter((doctor) => doctor.id === doctorId).map((doctor) => (
              <div>
                About:
                {doctor.about}
              </div>
            ))}
          </div>
          {isOpen && (
          <DoctorAppointment
            content={(
              <>

              </>
)}
            handleClose={togglePopup}
          />
          )}
          <DoctorButton
            className="btns"
            buttonStyle="btn--outline"
            buttonSize="btn--large"
            onClick={togglePopup}
          >
            Book AN Appointment

          </DoctorButton>
        </div>

      </div>
    </div>

  );
}

export default DoctorDetails;
