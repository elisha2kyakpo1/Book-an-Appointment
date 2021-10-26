<<<<<<< HEAD
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import React from 'react'
=======
/* eslint-disable no-unused-vars */
import { BrowserRouter as Router } from 'react-router-dom';
import React from 'react';
import { Provider } from 'react-redux';
import { store } from './redux/ConfigureStore';
import HomePage from './home_page/HomePage';
>>>>>>> 09e5a407fc483891efa0f8c141471fa7dbb06608
import Home from './Home';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="page container">
          <Home />
          <HomePage />
        </div>
      </Router>
    </Provider>
  );
}

export default App;
