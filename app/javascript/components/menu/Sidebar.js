import React from 'react';
import { Link } from 'react-router-dom';
import './Hamburger.css'
import './Sidebar.css';

const SideBar = () => {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
} 
(
  
  <div className="mobile-container">
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
      <i class="fa fa-bars"></i>
    </ul>
  </div>
);

export default SideBar;
