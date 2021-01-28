import React from 'react';
import ToDoItem from './TodoItem';
import './TodoList.css';

const TodoList = ({ todos, onCheckToggle }) => {
  return (
    <div className="TodoList">
      {todos.map((todo) => (
        <ToDoItem key={todo.id} todo={todo} onCheckToggle={onCheckToggle} />
      ))}
    </div>
  );
};

export default TodoList;
