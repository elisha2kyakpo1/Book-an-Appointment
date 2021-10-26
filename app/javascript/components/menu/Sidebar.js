import React from "react";
import { Route, BrowserRouter as Router, Switch, Link } from "react-router-dom";
import Doctor from "../doctors/Doctors";
import Appointment from "../doctors/Appointment";

function Sidebar() {
  return (

      <div>
        <nav>
            <ul className="links">
              <li>
                <Link to="/doctor">Doctors</Link>
              </li>
              <li>
                <Link to="/Appointment">Appointment</Link>
              </li>
              <li>
                <Link to="/Add_doctor">Add doctor</Link>
              </li>
              <li>
                <Link to="/My_appointment">My appointment</Link>
              </li>
             
            </ul>
          </nav>
          <Switch>
            <Route path="/doctor" component={Doctor} />
            <Route path="/appointment" component={Appointment} />
            <Route path="/appointment" component={Appointment} />
          </Switch>
      </div>

  );
}

export default Sidebar;
