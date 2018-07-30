import React from 'react';
import { render } from 'react-dom';
import App from './App';
import Updater from './update';

const model = { count: 0 };
export const Store = React.createContext();

render(
  <Updater Store={Store} model={model}>
    <App />
  </Updater>,
  document.getElementById('root')
);
