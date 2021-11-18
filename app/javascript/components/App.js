/* eslint-disable no-unused-vars */
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import React from 'react';
import { Provider } from 'react-redux';
import { store } from './redux/ConfigureStore';
import Doctors from './doctors/Doctors';
import DoctorDetails from './doctors/DoctorDetails';
import AddDoctor from './doctors/add-doc/AddDoctor';
import Appointment from './clients/Appointment';
import DoctorAppointment from './clients/Doctorappointment';
import './App.css';
import SideBar from './menu/Sidebar';
import Hamburger from './menu/Hamburger';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Hamburger />
        <div className="page-container">
          <SideBar />
          <div className="display-doc">
            <Switch>
              <Route exact path="/" component={Doctors} />
              <Route path="/DetailsPage/:id" component={DoctorDetails} />
              <Route path="/doctor/appointment" component={DoctorAppointment} />
              <Route path="/addDoctor" component={AddDoctor} />
              <Route path="/appointments" component={Appointment} />
            </Switch>
          </div>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
