/* eslint-disable no-restricted-globals */
/* eslint-disable no-alert */
/* eslint-disable consistent-return */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addDoctorAPI } from "../../redux/Doctors";

import Form from "./Form";

const AddDoctor = () => {
  const dispatch = useDispatch();
  const [formState, setFormState] = useState({});

  function handleChange(e) {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(addDoctorAPI(formState));

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
      <Form
        handleChange={(e) => handleChange(e)}
        handleSubmit={(e) => handleSubmit(e)}
        formState={formState}
      />
    </>
  );
};

export default AddDoctor;
