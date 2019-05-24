import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>
        You clicked {count} times.
      </p>
      <button
        type="button"
        className="bg-pink text-white rounded py-2 px-4 mt-2"
        onClick={() => setCount(count + 1)}
      >
        Click me!
      </button>
    </div>
  );
};

export default Counter;
