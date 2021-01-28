import React from 'react';
import ToDoItem from './TodoItem';
import './TodoList.css';

const TodoList = ({ todos }) => {
  return (
    <div className="TodoList">
      {todos.map((todo) => (
        <ToDoItem key={todo.id} todo={todo} />
      ))}
    </div>
  );
};

export default TodoList;
