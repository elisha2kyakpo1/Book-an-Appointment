/* eslint-disable no-restricted-globals */
/* eslint-disable react/no-unused-state */
/* eslint-disable react/prop-types */
/* eslint-disable no-alert */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/state-in-constructor */
import React from 'react';

export default class AddDoctor extends React.Component {
    onSubmit = (e) => {
      e.preventDefault();
      const fileField = document.querySelector('input[type="file"]');
      const form = new FormData();
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const phone = document.getElementById('phone').value;
      form.append('name', name);
      form.append('image', fileField.files[0]);
      form.append('email', email);
      form.append('phone', phone);
      fetch('/api/v1/doctors', {
        method: 'POST',
        body: form,
      });
      window.location.replace('http://localhost:3000');
    }

    render() {
      return (
        <div className="form">
          <form onSubmit={this.onSubmit}>
            <label>name</label>
            <input type="text" name="name" id="name" />
            <label>email</label>
            <input type="text" name="email" id="email" />
            <label>phone</label>
            <input type="text" name="phone" id="phone" />
            <h1>New Upload</h1>
            <label>Image Upload</label>
            <input type="file" name="image" />
            <br />
            <br />
            <input type="submit" />
          </form>
        </div>
      );
    }
}
