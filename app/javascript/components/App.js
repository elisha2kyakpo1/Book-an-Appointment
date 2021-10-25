/* eslint-disable no-unused-vars */
import { BrowserRouter as Router } from 'react-router-dom';
import React from 'react';
import { Provider } from 'react-redux';
import { store } from './redux/ConfigureStore';
import HomePage from './home_page/HomePage';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="page container">
          <HomePage />
        </div>
      </Router>
    </Provider>
  );
}

export default App;
