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
import Profile from './doctors/Profile';
import SideBar from './menu/Sidebar';
import MobileSideBar from './menu/MobileSideBar';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="page-container">
        <MobileSideBar />
        <SideBar />
          <Switch>
            <Route exact path="/" component={Doctors} />
            <Route path="/DetailsPage/:id" component={DoctorDetails} />
            <Route path="/doctor/appointment" component={DoctorAppointment} />
            <Route path="/addDoctor" component={AddDoctor} />
            <Route path="/appointments" component={Appointment} />
            <Route path="/profile" component={Profile} />

          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
