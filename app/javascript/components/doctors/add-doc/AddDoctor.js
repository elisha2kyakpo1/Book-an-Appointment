/* eslint-disable no-restricted-globals */
/* eslint-disable no-alert */
/* eslint-disable consistent-return */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addDoctorAPI } from "../../redux/Doctors";
import './AddDoctor.css';
import Form from "./Form";

const AddDoctor = () => {
  const dispatch = useDispatch();
  const [formState, setFormState] = useState({});

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(addDoctorAPI(formState));
    setFormState({ ...formState, [e.target.name]: e.target.value });
    setFormState({
      ...formState,
      name: "",
      email: "",
      about: "",
      image: "",
    });
  }

  return (
    <>

      <div className="add-doctor d-flex">
        <div className="inner-div">
          <div className="side_add_doctor">
            <h4>Add a doctor</h4>
          </div>
          <form onSubmit={submitData} className="add_doctor_form">
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Name</label>
              <input type="text" className="form-control" id="name" name="name"  placeholder="Name" />
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
      <Form
        handleSubmit={(e) => handleSubmit(e)}
        formState={formState}
      />
    </>
  );
};

export default AddDoctor;
