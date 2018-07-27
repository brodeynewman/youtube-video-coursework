import React from 'react';

const TodoItem = props => {
  const {
    id,
    title,
    isCompleted,    
    onTodoDelete,
    onToggleTodoComplete,
  } = props;

  return (
    <div className={isCompleted ? 'todo-item--completed' : 'todo-item'}>
      <div className="todo-title">{title}</div>
      <div className="todo-actions">
        <button
          className="todo-complete"
          onClick={onToggleTodoComplete(id)}
        >
          {
            isCompleted ? 'Un-complete' : 'Complete'
          }
        </button>
        <button className="todo-delete" onClick={onTodoDelete(id)}>Delete</button>
      </div>
    </div>
  );
};

export default TodoItem;