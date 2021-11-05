/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import { useSelector, useDispatch } from 'react-redux';
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getDoctors } from '../redux/Doctors';
import { getAppointments } from '../redux/Appointments';
import './Doctor.css';

const Doctors = () => {
  const doctors = useSelector((state) => state.doctorReducer);
  const appointments = useSelector((state) => state.appointmentReducer);

  const dispatch = useDispatch();
  useEffect(() => {
    if (!doctors.length) {
      dispatch(getDoctors());
    }

    if (!appointments.length) {
      dispatch(getAppointments());
    }

    if (localStorage.getItem('numberOfDoctors') > doctors.length) {
      localStorage.setItem('numberOfDoctors', doctors.length);
      window.location.href = '/';
    }
  }, []);

  return (
    <>
      <div className="outter_container">
        <div className="contain">
          <div className="leading">
            <h1 className="please">LEADING DOCTORS</h1>
            <h2 className="select">please select a doctor</h2>
          </div>
          <div className="shape_doctors">
            <div className="shape sh_left">
              <div className="inner_left">
                <i className="material-icons" style={{ color: 'white' }}>change_history</i>
              </div>
            </div>
            <div className="container">
              <div className="row">
                {doctors.map((doctor) => (
                  <div className="col-12 col-md-6 col-lg-4">
                    <div className="doctor">
                      <div className="circle">
                        <img src={doctor.image} alt="doctors" />
                      </div>
                      <h2 className="name"><Link to={`/DetailsPage/${doctor.id}`}>{doctor.name}</Link></h2>
                    </div>
                  </div>

                ))}

              </div>

            </div>
            <div className="shape opposite">
              <div className="inner_right">
                <i className="material-icons" style={{ color: 'white' }}>change_history</i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Doctors;
