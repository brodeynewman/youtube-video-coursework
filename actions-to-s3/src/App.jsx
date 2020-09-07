import React from 'react';
import Counter from './components/Counter';
import './App.css';

const App = () => (
  <div className="flex min-h-screen font-sans bg-grey-200 items-center">
    <div className="container mx-auto text-center">
      <Counter />
    </div>
  </div>
);

export default App;
