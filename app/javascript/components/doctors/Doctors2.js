/* eslint-disable react/jsx-key */
import { useSelector, useDispatch } from "react-redux";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { getDoctors } from "../redux/Doctors";
import { getAppointments } from "../redux/Appointments";
import Sidebar from "../menu/Sidebar";
import "./Doctor2.css";
import NavBar from "../menu/NavBar";
import "./Doctor2.css";
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

    if (localStorage.getItem("booked") !== null) {
      localStorage.removeItem("booked");
    }

    if (localStorage.getItem("addDoctor") !== null) {
      localStorage.removeItem("addDoctor");
      window.location.href = "/";
    }
  }, []);

  return (
    <div className="main-container ">
      <div>
        <NavBar />
      </div>

      <div className="doctor-list">
        <div>
          <h1>LEADING DOCTORS</h1>
          <hr className="break" />
          <h4>please select a doctor</h4>
        </div>

        <div className="doctors">
          {doctors.map((doctor) => (
            <div className="doctor">
              <div className="image">
                <img src={doctor.image} alt="doctors" />
              </div>
              <h2>
                <Link className="name" to={`/DetailsPage/${doctor.id}`}>
                  {doctor.name}
                </Link>
              </h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Doctors;
