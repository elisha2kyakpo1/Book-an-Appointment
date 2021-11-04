/* eslint-disable no-restricted-globals */
/* eslint-disable no-alert */
/* eslint-disable consistent-return */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { useSelector } from 'react-redux';

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
      localStorage.setItem('numberOfDoctors', doctors.length + 1);
      window.location.href = '/';
    }
    e.preventDefault();
  };

  return (

    <>

      <div>
        <div id="name_error" />
        <div id="email_error" />
        <div id="phone_error" />
        <div id="image_error" />
        <form onSubmit={onSubmit}>
          <div>
            <label>name</label>
            <input type="text" name="name" id="name" />
          </div>
          <div>
            <br />
            <label>email</label>
            <input type="text" name="email" id="email" />
          </div>
          <div>
            <br />
            <label>phone</label>
            <input type="text" name="phone" id="phone" />
          </div>
          <div>
            <br />
            <label>about</label>
            <textarea name="about" id="about" />
          </div>
          <div>
            <label>photo</label>
            <input type="file" name="image" />
          </div>
          <br />
          <br />
          <input type="submit" />
        </form>
      </div>
    </>
  );
};

export default AddDoctor;
