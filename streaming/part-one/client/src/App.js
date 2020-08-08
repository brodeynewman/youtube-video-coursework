import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import './App.css';
import Router from './routes';

const App = () => (
  <BrowserRouter>
    <Router />
  </BrowserRouter>
);

export default App;
