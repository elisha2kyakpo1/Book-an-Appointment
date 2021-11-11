/* eslint-disable react/jsx-key */
import { useSelector, useDispatch } from 'react-redux';
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getDoctors } from '../redux/Doctors';
import { getAppointments, getClientAppointments } from '../redux/Appointments';
import Sidebar from '../menu/Sidebar';
import './Doctor.css';

const Doctors = () => {
  const doctors = useSelector((state) => state.doctorReducer);
  const appointments = useSelector((state) => state.appointmentReducer);
  const clientAppointments = useSelector((state) => state.clientAppointmentReducer);

  const dispatch = useDispatch();
  useEffect(() => {
    if (!doctors.length) {
      dispatch(getDoctors());
    }

    if (!clientAppointments.length) {
      dispatch(getClientAppointments());
    }

    if (!appointments.length) {
      dispatch(getAppointments());
    }

    if (localStorage.getItem('booked') !== null) {
      localStorage.removeItem('booked');
    }

    if (localStorage.getItem('addDoctor') !== null) {
      localStorage.removeItem('addDoctor');
      window.location.href = '/';
    }
  }, []);

  return (
    <>
      <div className="outter_container doctors">
        <div className="left_side_bar">
          <Sidebar />
        </div>
        <div className="contain">
          <div className="leading">
            <h1 className="please">LEADING DOCTORS</h1>
            <h2 className="select">please select a doctor</h2>
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
        </div>
      </div>
    </>
  );
};

export default Doctors;