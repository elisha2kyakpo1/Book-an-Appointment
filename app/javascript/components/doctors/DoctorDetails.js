/* eslint-disable react/button-has-type */
/* eslint-disable react/jsx-key */
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import DoctorAppointment from '../clients/Doctorappointment';

function DoctorDetails() {
  const storeDoctors = useSelector((state) => state.doctorReducer);
  const { id } = useParams();
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {

  }, []);

  return (
    <div>
      <input
        type="button"
        value="book an appointment"
        onClick={togglePopup}
      />
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
            <b>Design your Popup</b>

            <button>Test button</button>
          </>
)}
        handleClose={togglePopup}
      />
      )}
    </div>

  );
}

export default DoctorDetails;
