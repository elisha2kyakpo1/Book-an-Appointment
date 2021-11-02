/* eslint-disable no-alert */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable no-restricted-globals */
/* eslint-disable no-unused-vars */
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import React from 'react';
import { Provider } from 'react-redux';
import { store } from './redux/ConfigureStore';
import Home from './Home';
import DoctorDetails from './doctors/DoctorDetails';
import AddDoctor from './doctors/AddDoctor';
import Appointment from './clients/Appointment';
import Profile from './doctors/Profile';

export default class App extends React.Component {
  componentDidMount() {
    location.reload();
  }

  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="page container">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/DetailsPage/:id" component={DoctorDetails} />
              <Route path="/addDoctor" component={AddDoctor} />
              <Route path="/appointments" component={Appointment} />
              <Route path="/profile" component={Profile} />

            </Switch>
          </div>
        </Router>
      </Provider>
    );
  }
}
