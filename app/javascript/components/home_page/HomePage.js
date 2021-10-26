import React from 'react';
import Button from './Button';
import '../doctors/Doctors.css'
function HomePage() {
  return (
    <div className="hero-container">
      <h1>EXCEPTIONAL CARE TO YOU</h1>
      <p>Book a an appointment today</p>
      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          GET STARTED
        </Button>
      </div>
    </div>
  );
}

export default HomePage;
