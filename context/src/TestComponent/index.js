import React from 'react';
import withUpdate from '../withUpdate';

const TestComponent = (props) => {
  const { actions } = props;
  const { count } = props.model;

  return (
    <div>
      this is a test
      <div>current count: {count}</div>
      <button onClick={actions.incrementCount}>Increment</button>
      <button onClick={actions.decrementCount}>Decrement</button>
    </div>
  );
};

export default withUpdate(TestComponent);
