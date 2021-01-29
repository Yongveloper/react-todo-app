import React from 'react';
import ToDoItem from './TodoItem';
import './TodoList.css';

const TodoList = ({ todos, onCheckToggle, onInsertToggle, onChangeSelectedTodo }) => {
  return (
    <div className="TodoList">
      <div className="todoList-wrap">
        {todos.map((todo) => (
          <ToDoItem
            key={todo.id}
            todo={todo}
            onCheckToggle={onCheckToggle}
            onInsertToggle={onInsertToggle}
            onChangeSelectedTodo={onChangeSelectedTodo}
          />
        ))}
      </div>
    </div>
  );
};

export default TodoList;
