import React, { useState } from "react";
import { Link } from 'react-router-dom';
import './Hamburger.css';

const Hamburger = () => {

  const [showMenu, setShowMenu] = useState(false);

  let menu;

  if (showMenu) {
    menu = <ul className="nav-links">
      <li>
        <Link className="link-mobile" to="/">Home</Link>
      </li>
      <li>
        <Link className="link-mobile" to="/addDoctor">Add doctor</Link>
      </li>
      <li>
        <Link className="link-mobile" to="/appointments">My appointment</Link>
      </li>
    </ul>
  }
  
  return (
    <div className="parent-container">
      <nav className="nav-menu-mobile d-flex">
        {menu}
        <div className="logo">
          <h3>LEADING DOCTORS</h3>
        </div>
        <div className="burger" onClick={() => setShowMenu(!showMenu)}>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
      </nav>
      <p className="paragraph">please select a doctor</p>
    </div>
  );
};

export default Hamburger;
