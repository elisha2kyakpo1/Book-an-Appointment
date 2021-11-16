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

  return (
    <div className="outter_container">
      <div className="contain">
        <div className="display_doctor_navbar">
        </div>
        <div className="doctor display_doctor">
      
          <div>
            {doctors.filter((doctor) => doctor.id === doctorId).map((doctor) => (
              <div key={doctor.id} className="details">
                <div className="circle-details">
                  <img
                    src={doctor.image}
                    alt="doctor"
                  />
                </div>
                <div className="doc-data">
                  <h4>{doctor.name}</h4>
                  <h6 className="amount">from as low as $120 per month</h6>
                  <p>{doctor.email}</p>
                  <p>{doctor.about}</p>
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
            Book an appointment

          </DoctorButton>
        </div>

      </div>
    </div>

  );
}

export default DoctorDetails;
