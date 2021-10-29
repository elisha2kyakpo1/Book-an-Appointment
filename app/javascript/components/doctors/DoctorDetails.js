/* eslint-disable react/jsx-key */
import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

function DoctorDetails() {
  const storeDoctors = useSelector((state) => state.doctorReducer);
  const { id } = useParams();
  return (
    <div>
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
  );
}

export default DoctorDetails;
