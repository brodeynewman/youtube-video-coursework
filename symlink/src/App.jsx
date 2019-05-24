import Counter from 'cool-counter-app';
import React, { useState } from 'react';

import './App.css';

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="flex min-h-screen font-sans bg-grey-lighter items-center">
      <div className="container mx-auto text-center">
        <Counter count={count} onSetCount={setCount} />
      </div>
    </div>
  );
}

export default App;
