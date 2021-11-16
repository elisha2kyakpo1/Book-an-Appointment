import React from 'react';
<<<<<<< HEAD
=======
import {FaFacebook, FaGoogle, FaInstagram, FaPinterest, FaTwitter} from 'react-icons/fa'
>>>>>>> fddb78ab8beb0272cdbc7693b0d3492bb397062a
import { Link } from 'react-router-dom';
import './Sidebar.css';

const SideBar = () => (
  <ul className="side-menu">
    <li>
      <Link className="link" to="/">
        Home
      </Link>
    </li>
    <li>
      <Link className="link" to="/addDoctor">
        Add Doctor
      </Link>
    </li>
    <li>
      <Link className="link" to="/appointments">
<<<<<<< HEAD
        Appointment
      </Link>
    </li>
    <li>
      <Link className="link" to="/profile">
        Profile
      </Link>
    </li>
  </ul>
=======
        My appointments
      </Link>
    </li>
    <div className="social d-flex">
      <div>
        <div className="icons">
          <FaTwitter />
          <FaFacebook />
          <FaGoogle />
          <FaInstagram />
          <FaPinterest />
        </div>
        <small>&copy;2021 book a doctor</small>
        </div>
    </div>
  </ul>
  
>>>>>>> fddb78ab8beb0272cdbc7693b0d3492bb397062a
);

export default SideBar;
