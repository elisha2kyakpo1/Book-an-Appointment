import React from 'react'
import DoctorRegisteration from './doctors/DoctorRegisteration'
import Sidebar from './menu/Sidebar'

const Home = () => {
  return (
    <div>
      <Sidebar />
      <DoctorRegisteration />
    </div>
  )
}

export default Home
