import _ from 'lodash';
import React, { useState } from 'react';

/**
 * TodoInputComponent React Component
 * @param {Object} props - Component props
 * @returns {React.Component} - TodoInputComponent Component
 */
export const TodoInputComponent = ({ onSubmit }) => {
  const [inputValue, updateInputValue] = useState('');
  const handleInputChange = event => updateInputValue(event.target.value);

  const handleSubmit = (event) => {
    event.preventDefault();

    onSubmit({
      name: inputValue,
      id: _.uniqueId(),
    });

    updateInputValue('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        autoFocus
        className="new-todo"
        placeholder="What needs to be done?"
        onChange={handleInputChange}
        value={inputValue}
      />
    </form>
  );
}

TodoInputComponent.propTypes = {
  // onSubmit: PropTypes.func.isRequired,
};

export default TodoInputComponent;
