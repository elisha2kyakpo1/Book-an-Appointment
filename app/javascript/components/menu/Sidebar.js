import React from 'react';
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
  </ul>
);

export default SideBar;
