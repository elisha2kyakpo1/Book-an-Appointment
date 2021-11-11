import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './Doctor.css';

function Appointment {
  const doctors = useSelector((state) => state.doctorReducer);
  const { id } = useParams();
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="outter_container">
      <div className="contain">
        <div className="doctor">
          {doctors.filter((doctor) => doctor.id == id).map((doc) => (
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
