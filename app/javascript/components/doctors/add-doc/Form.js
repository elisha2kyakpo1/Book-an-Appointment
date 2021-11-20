import React from "react";
import "./Form.css";

const Form = (props) => (
  <div className="add-doctor d-flex">
    <div className="inner-div">
      <div className="side_add_doctor">
        <h4>Add a doctor</h4>
      </div>
      <form onSubmit={props.handleSubmit} className="add_doctor_form">
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            placeholder="Name"
            value={props.formState.name}
            onChange={props.handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email</label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            placeholder="Email"
            value={props.formState.email}
            onChange={props.handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Phone</label>
          <input
            type="text"
            className="form-control"
            id="phone"
            name="phone"
            placeholder="Phone"
            value={props.formState.phone}
            onChange={props.handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">About</label>
          <textarea
            className="form-control"
            id="about"
            name="about"
            placeholder="About"
            value={props.formState.about}
            onChange={props.handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Image</label>
          <input
            type="file"
            className="form-control"
            id="phone"
            name="phone"
            placeholder="Password"
            value={props.formState.image}
            onChange={props.handleChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  </div>
);

export default Form;
