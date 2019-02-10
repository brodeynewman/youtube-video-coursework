import React from 'react';

import './App.css';
import Router from './Router';
import Header from './components/Header';

const App = () => (
  <div className="bg-grey-darkest h-screen">
    <Header />
    <Router />
  </div>
);

export default App;
