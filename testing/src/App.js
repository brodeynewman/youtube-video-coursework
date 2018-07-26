import _ from 'lodash';
import uuid from 'uuid';
import React from 'react';
import Text from './components/Text';
import TodoItem from './components/TodoItem';
import withSomething from './components/HOC/withSomething';

class App extends React.Component {
  state = {
    todoItems: [
      { id: 1, title: "This is a todo!", isCompleted: true },
    ],
    inputValue: '',
  };

  handleTodoDelete = id =>
    this.setState({
      todoItems: _.filter(this.state.todoItems, todo => todo.id !== id),
    });

  handleTodoToggleComplete = id =>
    this.setState({
      todoItems: _.map(this.state.todoItems, todo => ({
        ...todo,
        isCompleted: id === todo.id ? !todo.isCompleted : todo.isCompleted,
      })),
    });

  createTodoItem = title => ({
    id: uuid.v4(),
    title,
    isCompleted: false,
  });

  onAddTodo = (event) => {
    event.preventDefault();

    const { todoItems, inputValue } = this.state;

    this.setState({
      todoItems: [...todoItems, this.createTodoItem(inputValue)],
      inputValue: '',
    });
  }

  handleInputChange = ({ target }) =>
    this.setState({
      inputValue: target.value,
    });

  render() {
    const { todoItems, inputValue } = this.state;

    return (
      <div className="root">
        <div className="todo-container">
          <span className="todo-container-title">Todo Items</span>
          <div className="todo-input-box">
            <span>Create todo item</span>
            <Text
              onInputChange={this.handleInputChange}
              onAddTodo={this.onAddTodo}
              value={inputValue}
            />
          </div>
          {_.map(todoItems, todo => (
            <TodoItem
              id={todo.id}
              key={todo.id}
              title={todo.title}
              isCompleted={todo.isCompleted}
              onTodoDelete={this.handleTodoDelete}
              onToggleTodoComplete={this.handleTodoToggleComplete}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default withSomething(App);