/* eslint-disable */

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import App from './App';
import UserProvider from './components/UserProvider';

ReactDOM.render(
  <BrowserRouter>
    <UserProvider>
      <App />
    </UserProvider>
  </BrowserRouter>,
  document.getElementById('app'),
);

if (process.env.NODE_ENV === 'development') {
  module.hot.accept();
}
