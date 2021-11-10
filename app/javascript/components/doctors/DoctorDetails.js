/* eslint-disable no-empty */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/button-has-type */
/* eslint-disable react/jsx-key */
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import DoctorAppointment from '../clients/Doctorappointment';
import DoctorButton from './DoctorButton';
import './Doctor.css';

function DoctorDetails() {
  let doctors = useSelector((state) => state.doctorReducer);
  const { id } = useParams();
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  if (!localStorage.getItem('stored_doctors')) {
    localStorage.setItem('stored_doctors', JSON.stringify(doctors));
  }

  const stored_doctors = JSON.parse(localStorage.getItem('stored_doctors'));

  return (
    <div className="outter_container">
      <div className="contain">
        <div className="doctor">
          {stored_doctors.filter((doctor) => doctor.id == id).map((doc) => (
            <div className="doctor">
              <div className="circle">
                <img src={doc.image} alt="doctors" />
              </div>
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

  );
}

export default DoctorDetails;
