/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import { useSelector, useDispatch } from 'react-redux';
import React, { useEffect, useState } from 'react';
import { getDoctors } from '../redux/Doctors';
import { Link } from 'react-router-dom';
import './Doctor.css';

const Doctors = () => {
  const doctors = useSelector((state) => state.doctorReducer);
  const [doctor, setDoctor] = useState({});

  const dispatch = useDispatch();
  useEffect(() => {
    if (!doctors.length) {
      dispatch(getDoctors());
    }
  }, []);

  const [body, displayBody] = useState([]);

  useEffect(() => {
    displayBody(doctors);
  }, [doctors]);

  const rndInt = Math.floor(Math.random() * 4) + 1;

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
