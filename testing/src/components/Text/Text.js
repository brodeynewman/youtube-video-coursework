import React from 'react';

const Text = props => {
  const { value, onInputChange, onAddTodo } = props;

  return (
    <form onSubmit={onAddTodo}>
      <input
        className="input"
        value={value}
        onChange={onInputChange}
      />
    </form>
  );
};

export default Text;
