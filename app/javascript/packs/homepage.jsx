import React from 'react';
import ReactDOM from 'react-dom';
import HomePage from '../components/HomePage';

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <HomePage name="React" />,
    document.body.appendChild(document.createElement('div')),
  );
});
