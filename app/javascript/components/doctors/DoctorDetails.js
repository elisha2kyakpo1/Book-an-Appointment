/* eslint-disable no-alert */
/* eslint-disable no-empty */
/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import DoctorAppointment from '../clients/Doctorappointment';
import DoctorButton from './DoctorButton';
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
      <div className="contain">
        <div className="display_doctor_navbar">
        </div>
        <div className="doctor display_doctor">
      
          <div>
            {storedDoctors.filter((doctor) => doctor.id === doctorId).map((doctor) => (
              <div className="details">
                <div className="circle-details">
                  <img
                    src={doctor.image}
                    alt="doctor"
                  />
                </div>
                <div>
                  <div>{doctor.name}</div>
                  <div>{doctor.email}</div>
                  <div>{doctor.about}</div>
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
            buttonSize="btn--small"
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
