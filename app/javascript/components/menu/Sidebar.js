import React from 'react';
import {FaFacebook, FaGoogle, FaInstagram, FaPinterest, FaTwitter} from 'react-icons/fa'
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
        <small>&copy; 2021 book a doctor</small>
        </div>
    </div>
  </ul>
  
);

export default SideBar;
