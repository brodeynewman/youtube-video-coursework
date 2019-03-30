import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';

import TodoItem from './TodoItem';

/**
 * TodoList React Component
 * @param {Object} props - Component props
 * @returns {React.Component} - Todo List Component
 */
const TodoList = ({ todos, onDeleteTodo }) => (
  <ul className="todo-list">
    {_.map(todos, todo => (
      <TodoItem
        key={todo.id}
        {...todo}
        onDeleteTodo={onDeleteTodo}
      />
    ))}
  </ul>
);

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    id: PropTypes.string,
    isCompleted: PropTypes.bool,
  })).isRequired,
};

export default TodoList;
