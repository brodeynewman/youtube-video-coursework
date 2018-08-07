import React from 'react';
import withState from '../HOC/withState';

const Count = (props) => {
  const { model = {}, actions } = props;

  return (
    <div className="counter">
      <span className="counter-title">
        Counter
      </span>
      <span className="counter-amount">
        Current count:
        <span className="count">
          {model.count}
        </span>
      </span>
      <div className="counter-buttons">
        <button onClick={actions.incrementCounter} className="increment" type="button">
          Increment
        </button>
        <button onClick={actions.decrementCounter} className="decrement" type="button">
          Decrement
        </button>
      </div>
    </div>
  );
};

export default withState(Count);
