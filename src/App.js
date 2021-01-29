import React, { useState, useEffect } from 'react';
import TodoHeader from './components/TodoHeader';
import TodoList from './components/TodoList';
import TodoInsert from './components/TodoInsert';
import { MdAddCircle } from 'react-icons/md';
import './App.css';

let nextId = 4;

const App = () => {
  const [selectedTodo, setSelectedTodo] = useState(null);
  const [insertToggle, setInsertToggle] = useState(false);
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: '할일 1',
      checked: false,
    },
  ]);

  const [selected, setSelected] = useState([]);

  const onInsertToggle = () => {
    if (selectedTodo) {
      setSelectedTodo(null);
    }
    setInsertToggle((prev) => !prev);
  };

  const onInsertTodo = (text) => {
    if (text === '') {
      return alert('할 일을 입력해주세요.');
    }

    const todo = {
      id: nextId,
      text,
      checked: false,
    };

    setTodos((todos) => todos.concat(todo));
    nextId++;
  };

  const onCheckToggle = (id) => {
    setTodos((todos) => todos.map((todo) => (todo.id === id ? { ...todo, checked: !todo.checked } : todo)));
  };

  const onChangeSelectedTodo = (todo) => {
    setSelectedTodo(todo);
  };

  const onRemove = (id) => {
    onInsertToggle();
    setTodos((todos) => todos.filter((todo) => todo.id !== id));
  };

  const onUpdate = (id, text) => {
    onInsertToggle();
    setTodos((todos) => todos.map((todo) => (todo.id === id ? { ...todo, text } : todo)));
  };

  useEffect(() => {
    setSelected(todos.filter((todo) => todo.checked));
  }, [todos]);

  return (
    <div className="Template">
      <TodoHeader todoLength={todos.length} selectedLength={selected.length} />
      <TodoList
        todos={todos}
        onCheckToggle={onCheckToggle}
        onInsertToggle={onInsertToggle}
        onChangeSelectedTodo={onChangeSelectedTodo}
      />
      <div className="add-todo-button" onClick={onInsertToggle}>
        <MdAddCircle />
      </div>
      {insertToggle && (
        <TodoInsert
          selectedTodo={selectedTodo}
          onInsertToggle={onInsertToggle}
          onInsertTodo={onInsertTodo}
          onRemove={onRemove}
          onUpdate={onUpdate}
        />
      )}
    </div>
  );
};

export default App;
