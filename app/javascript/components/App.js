/* eslint-disable no-unused-vars */
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React from "react";
import { Provider } from "react-redux";
import { store } from "./redux/ConfigureStore";
import Home from "./Home";
import DoctorDetails from "../components/doctors/DoctorDetails";
import AddADoctor from "./doctors/AddADoctor";
import Appointment from "./clients/Appointment";
import Profile from "./doctors/Profile";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="page container">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/DetailsPage/:id" component={DoctorDetails} />
            <Route path="/addADoctor" component={AddADoctor} />
            <Route path="/appointments" component={Appointment} />
            <Route path="/profile" component={Profile} />

          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
