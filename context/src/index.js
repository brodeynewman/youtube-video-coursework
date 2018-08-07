import React from 'react';
import { render } from 'react-dom';
import './index.css';
import App from './App';
import MyProvider from './components/Provider';

render(
  <MyProvider>
    <App />
  </MyProvider>,
  document.getElementById('root'),
);
