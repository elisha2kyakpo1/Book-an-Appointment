/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/button-has-type */
/* eslint-disable react/jsx-key */
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import DoctorAppointment from '../clients/Doctorappointment';
import DoctorButton from './DoctorButton';
import './Doctor.css';

function DoctorDetails() {
  const storeDoctors = useSelector((state) => state.doctorReducer);
  const { id } = useParams();
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="outter_container">
      <div className="contain">
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
