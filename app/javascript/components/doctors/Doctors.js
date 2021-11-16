/* eslint-disable react/jsx-key */
import { useSelector, useDispatch } from 'react-redux';
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Carousel from "react-elastic-carousel";
<<<<<<< HEAD
=======
import {FaFacebook, FaGoogle, FaTwitter} from 'react-icons/fa'
>>>>>>> fddb78ab8beb0272cdbc7693b0d3492bb397062a
import { getDoctors } from '../redux/Doctors';
import { getAppointments, getClientAppointments } from '../redux/Appointments';
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


  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 }
  ];

  return (
    <>
      <div className="">
        <div className="">
        </div>
        <div className="contain-doctor">
          <div className="leading d-flex">
            <div>
              <h2 className="">LEADING DOCTORS</h2>
              <p className="paragraph">please select a doctor</p>
            </div>
          </div>
          <div className="main controls-wrapper">
            <div className="row-div carousel-wrapper d-flex">
              <Carousel breakPoints={breakPoints}>
                {doctors.map((doctor) => (
                  <div key={doctor.id} className="image-div">
                    <div className="doctor">
                      <div className="circle">
                        <img src={doctor.image} alt="doctors" />
                      </div>
                      <div className="doc-info">
                        <h4 className="name"><Link to={`/DetailsPage/${doctor.id}`}>{doctor.name}</Link></h4>
                        <p className="paragraph"><Link to={`/DetailsPage/${doctor.id}`}>{doctor.about}</Link></p>
                      </div>
<<<<<<< HEAD
=======
                      <div>
                      <div className="social-doc">
                        <div>
                          <div className="icons">
                            <FaTwitter />
                            <FaFacebook />
                            <FaGoogle />
                          </div>
                          </div>
                        </div>
                      </div>
>>>>>>> fddb78ab8beb0272cdbc7693b0d3492bb397062a
                    </div>
                  </div>

                ))}
              </Carousel>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default Doctors;
