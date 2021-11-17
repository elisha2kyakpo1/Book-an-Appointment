import React from 'react';
import { Link } from 'react-router-dom';
import Hamburger from './Hamburger';
import './Sidebar.css';

const SideBar = () => {


  return (
    <div>
    <Hamburger />
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
          Appointment
        </Link>
      </li>
      <li>
        <Link className="link" to="/profile">
          Profile
        </Link>
      </li>
    </ul>
    </div>
  );
}
export default SideBar;
