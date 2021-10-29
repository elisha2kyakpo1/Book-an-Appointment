import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';

const SidebarData = [
  {
    title: 'Home',
    path: '/',
    icon: <AiIcons.AiFillHome color="#474747" />,
    cName: 'nav-text',
  },
  {
    title: 'Add Doctors',
    path: '/addDoctor',
    icon: <FaIcons.FaMedrt color="#474747" />,
    cName: 'nav-text',
  },

  {
    title: 'Appointments',
    path: '/appointments',
    icon: <AiIcons.AiFillInfoCircle color="#474747" />,
    cName: 'nav-text',
  },

  {
    title: 'My Profile',
    path: '/profile',
    icon: <AiIcons.AiFillProfile color="#474747" />,
    cName: 'nav-text',
  },
];

export default SidebarData;