import React from 'react';

import './App.css';
import Router from './Router';
import Header from './components/Header';

const App = () => (
  <div className="bg-grey-darkest h-screen">
    <Header links={[
      {
        to: '/',
        requireAuth: true,
        name: 'Home',
      },
      {
        to: '/dashboard',
        requireAuth: true,
        name: 'Dashboard',
      },
    ]}
    />
    <Router />
  </div>
);

export default App;
