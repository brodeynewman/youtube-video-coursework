import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import './App.css';
import Router from './routes';
import StreamProvider from './components/StreamProvider';

const App = () => (
  <BrowserRouter>
    <StreamProvider>
      <Router />
    </StreamProvider>
  </BrowserRouter>
);

export default App;
