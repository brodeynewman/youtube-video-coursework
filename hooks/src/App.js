import _ from 'lodash';
import cn from 'classnames';
import React, { useState } from 'react';

import TodoList from './TodoList';
import TodoInput from './TodoInput';

/**
 * Filters for todo list
 */
const FILTERS = {
  all: 'All',
  active: 'Active',
  completed: 'Completed',
};

/**
 * Maps a list of fitlers to buttons
 * @param {string} activeFilter - the currently active todo fliter
 * @param {function} handleChangeFilter - function used to change the current filter
 * @returns {Array<React.Component>} - List of fitler buttons
 */
const mapFiltersToButtons = ({ activeFilter = FILTERS.all } = {}) => (
  _.map(FILTERS, currentFilter => (
    <li key={currentFilter}>
      <button
        type="button"
        className={cn({
          selected: currentFilter === activeFilter,
        })}
      >
        {currentFilter}
      </button>
    </li>
  )));

/**
 * Top level React Component
 * @returns {React.Component} - App
 */
const App = () => {
  const [todos, addTodo] = useState([]);
  const amountOfActive = 0;

  const handleSubmit = todo => addTodo([...todos, todo]);
  const handleDeleteTodo = id => () => {
    const filteredTodos = _.filter(todos, todo => (
      todo.id !== id
    ));

    addTodo(filteredTodos);
  };

  return (
    <div>
      <section className="todoapp">
        <header className="header">
          <h1>todos <span>(using React hooks)</span></h1>
          <TodoInput onSubmit={handleSubmit} />
        </header>
        <section className="main">
          <TodoList onDeleteTodo={handleDeleteTodo} todos={todos} />
        </section>

        <footer className="footer">
          <span className="todo-count">
            {`${amountOfActive} ${amountOfActive !== 1 ? 'items' : 'item'} left`}
          </span>
          <ul className="filters">
            {mapFiltersToButtons()}
          </ul>
        </footer>
      </section>

      <footer className="info">
        <p>Double-click to edit a todo</p>
        <p>Created by <a href="http://github.com/brodeynewman">Brodey Newman</a></p>
        <p>Part of <a href="http://todomvc.com/">TodoMVC</a> (kinda)</p>
      </footer>
    </div>
  );
};

export default App;
