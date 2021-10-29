/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-indent */
/* eslint-disable react/button-has-type */
/* eslint-disable react/jsx-key */
import React from 'react';

function AddDoctor() {
  return (
    <div>
      <form action="/api/v1/doctors" method="POST">
  <div>
    <label htmlFor="say">name</label>
    <input type="text" name="name" id="name" />
  </div>
  <div>
    <label htmlFor="to">email</label>
    <input type="text" name="email" id="email" />
  </div>
  <div>
    <label htmlFor="to">phone</label>
    <input type="text" name="phone" id="phone" />
  </div>
  <div>
    <button>Create doctor</button>
  </div>
      </form>

    </div>
  );
}

export default AddDoctor;
