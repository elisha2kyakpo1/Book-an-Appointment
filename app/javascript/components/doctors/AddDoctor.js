/* eslint-disable no-restricted-globals */
/* eslint-disable no-alert */
/* eslint-disable consistent-return */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { useSelector } from 'react-redux';
import Sidebar from '../menu/Sidebar';
import './AddDoctor.css';

const AddDoctor = () => {
  const doctors = useSelector((state) => state.doctorReducer);
  const onSubmit = (e) => {
    let submit = true;
    const form = new FormData();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const image = document.querySelector('input[type="file"]').files[0];
    if (name === '') {
      document.getElementById('name_error').innerHTML = 'please enter your name';
      submit = false;
    }

    if (email === '') {
      document.getElementById('email_error').innerHTML = 'please enter your email';
      submit = false;
    }

    if (doctors.filter((doctor) => doctor.email === email).length > 0) {
      document.getElementById('email_error').innerHTML = 'email is already taken';
      submit = false;
    }

    if (phone === '') {
      document.getElementById('phone_error').innerHTML = 'please enter your phone';
      submit = false;
    }

    if (isNaN(phone)) {
      document.getElementById('phone_error').innerHTML = 'please enter a valid phone number';
      submit = false;
    }

    if (doctors.filter((doctor) => doctor.phone === phone).length > 0) {
      document.getElementById('phone_error').innerHTML = 'phone is already taken';
      submit = false;
    }

    if (image === undefined) {
      document.getElementById('email_error').innerHTML = 'please upload an image';
      submit = false;
    }

    if (submit === true) {
      form.append('name', name);
      form.append('image', image);
      form.append('email', email);
      form.append('phone', phone);
      form.append('about', document.getElementById('about').value);
      fetch('/api/v1/doctors', {
        method: 'POST',
        body: form,
      });
      localStorage.setItem('addDoctor', true);
      window.location.href = '/';
    }
    e.preventDefault();
  };

  return (

    <>

      <div className="outter_container red">
        <div className="side_add_doctor">
          <Sidebar />
        </div>
        <div className="contain">
          <div id="name_error" />
          <div id="email_error" />
          <div id="phone_error" />
          <div id="image_error" />
          <form onSubmit={onSubmit}>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Name</label>
              <input type="text" className="form-control" id="name" name="name" placeholder="Name" />
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Email</label>
              <input type="email" className="form-control" id="email" name="email" placeholder="Email" />
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputPassword1">Phone</label>
              <input type="text" className="form-control" id="phone" name="phone" placeholder="Phone" />
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputPassword1">About</label>
              <textarea className="form-control" id="about" name="about" placeholder="About" />
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputPassword1">Image</label>
              <input type="file" className="form-control" id="phone" name="phone" placeholder="Password" />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddDoctor;
