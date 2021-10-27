/* eslint-disable no-unused-vars */
import { BrowserRouter as Router } from 'react-router-dom';
import React from 'react';
import { Provider } from 'react-redux';
import { store } from './redux/ConfigureStore';

import Sidebar from './menu/Sidebar';
import Doctors from './doctors/Doctors';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="page container">
          <Sidebar />
          <Doctors />
        </div>
      </Router>
    </Provider>
  );
}

export default App;
