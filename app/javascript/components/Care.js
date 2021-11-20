import React from 'react';
import Button from './home_page/Button';
import './doctors/Doctor.css';

function Care() {
  return (
    <div className="carepage">
      <div className="vl v1_align" />
      <h1 className="care">
        <div>EXCEPTIONAL</div>
        <div>CARE FOR YOU</div>
      </h1>
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

export default Care;
