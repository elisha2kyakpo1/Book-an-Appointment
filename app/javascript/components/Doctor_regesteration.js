import React from 'react'

const Doctor_regesteration = () => {
  return (
    <div className="doc-regester">
      <form>
          <input className="form-control" placeholder="doctor's name" type="text" name="name" />
        <br/>
          <input className="form-control" type="text" placeholder="email" name="email" />
        <br/>
          <input className="form-control" type="number" placeholder="phone number" name="phone" />
        <br/>
          <input className="form-control" type="text" placeholder="about the doctor" name="about" />
        <br/>
        <input type="submit" value="Submit" />
      </form>
    </div>
  )
};

export default Doctor_regesteration;
