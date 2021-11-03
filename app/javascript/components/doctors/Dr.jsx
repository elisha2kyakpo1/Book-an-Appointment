/* eslint-disable react/no-this-in-sfc */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-restricted-globals */
/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import { useSelector } from 'react-redux';

const AddDoctor = () => {
  const doctors = useSelector((state) => state.doctorReducer);

  const onSubmit = (e) => {
    let submit = true;
    const form = new FormData();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    if (name === '') {
      document.getElementById('name_error').innerHTML = 'name cant be empty';
      submit = false;
    }

    if (email === '') {
      document.getElementById('email_error').innerHTML = 'email cant be empty';
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
      location.replace('http://localhost:3000/');
    }
    e.preventDefault();
  };

  return (

    <>

      <div>
        <div id="name_error" />
        <div id="email_error" />
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
    </>
  );
};

export default AddDoctor;
