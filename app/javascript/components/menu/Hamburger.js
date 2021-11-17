import React from "react";
import { Link } from 'react-router-dom';
import './Hamburger.css';

const Hamburger = () => {
  const navslide = () => {
    const nav = document.querySelector(".nav-links");
    const navLinks = document.querySelectorAll(".nav-links li");
    nav.classList.toggle("nav-active");
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
      }
    });

    burger.classList.toggle("toggle");
  };

  return (
    <div className="parent-container">
      <nav className="nav-menu-mobile d-flex">
        <ul className="nav-links">
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
        <div className="logo">
          <h3>LEADING DOCTORS</h3>
        </div>
        <div className="burger" onClick={() => navslide()}>
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
