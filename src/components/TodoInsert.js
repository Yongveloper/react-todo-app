import React, { useState } from 'react';
import { MdAddCircle } from 'react-icons/md';
import './TodoInsert.css';

const TodoInsert = ({ onInsertToggle, onInsertTodo }) => {
  const [value, setValue] = useState('');

  const onChange = (e) => {
    setValue(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    onInsertTodo(value);
    setValue('');
    onInsertToggle();
  };

  return (
    <div>
      <div className="background" onClick={onInsertToggle}></div>
      <form>
        <input placeholder="할 일을 적어주세요." value={value} onChange={onChange}></input>
        <button type="submit" onClick={onSubmit}>
          <MdAddCircle />
        </button>
      </form>
    </div>
  );
};

export default TodoInsert;
