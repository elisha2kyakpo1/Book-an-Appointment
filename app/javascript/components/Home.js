import React from 'react';
import Sidebar from './menu/Sidebar';
import Doctors from './doctors/Doctors';
import './Home.css';

const Home = () => (
  <div className="homepage">
  <Sidebar />
  <Doctors />

  </div>
);

export default Home;
