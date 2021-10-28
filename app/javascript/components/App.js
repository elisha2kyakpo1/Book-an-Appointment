/* eslint-disable no-unused-vars */
import { BrowserRouter as Router,Switch, Route } from 'react-router-dom';
import React from 'react';
import { Provider } from 'react-redux';
import { store } from './redux/ConfigureStore';
import Home from './Home';
import DoctorDetails from '../components/doctors/DoctorDetails';
function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="page container">
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/DetailsPage/:id" component={DoctorDetails} />
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
