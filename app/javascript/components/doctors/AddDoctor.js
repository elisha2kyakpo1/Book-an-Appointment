/* eslint-disable react/destructuring-assignment */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default class AddDoctor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: null,
    };
  }

    onSubmit = (e) => {
      let submit = true;
      const form = new FormData();
      const name = document.getElementById('name').value;
      if (name === '') {
        document.getElementById('name_error').innerHTML = 'name cant be empty';
        submit = false;
      }

      if (submit === true) {
        form.append('name', document.getElementById('name').value);
        form.append('image', document.querySelector('input[type="file"]').files[0]);
        form.append('email', document.getElementById('email').value);
        form.append('phone', document.getElementById('phone').value);
        form.append('about', document.getElementById('about').value);
        fetch('/api/v1/doctors', {
          method: 'POST',
          body: form,
        });
        this.setState({ redirect: '/' });
      }
      e.preventDefault();
    }

    render() {
      if (this.state.redirect) {
        return <Redirect to={this.state.redirect} />;
      }
      return (
        <div>
          <div id="name_error" />
          <form onSubmit={this.onSubmit}>
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
      );
    }
}
