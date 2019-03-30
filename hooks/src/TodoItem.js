import _ from 'lodash';
import React from 'react';
import cn from 'classnames';

/**
 * TodoItem React Component
 * @param {Object} props - Component props
 * @returns {React.Component} - Todo Item Component
 */
const TodoItem = ({ name, id, onDeleteTodo }) => (
  <li className={cn({
    editing: false,
    completed: false,
  })}
  >
    <div className="view">
      <input
        className="toggle"
        type="checkbox"
      />
      <label htmlFor="edit">
        {name}
      </label>
      <button
        type="button"
        className="destroy"
        onClick={onDeleteTodo(id)}
      />
    </div>
    <form>
      <input
        id="edit"
        className="edit"
      />
    </form>
  </li>
);

TodoItem.propTypes = {};

export default TodoItem;
