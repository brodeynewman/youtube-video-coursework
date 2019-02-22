import React from 'react';

import './App.css';
import Router from './Router';
import Header from './components/Header';

const links = [
  {
    to: '/',
    name: 'Home',
  },
  {
    to: '/dashboard',
    requireAuth: true,
    name: 'Dashboard',
  },
];

const App = () => (
  <div className="bg-grey-darkest h-screen">
    <Header links={links} />
    <Router />
  </div>
);

export default App;
