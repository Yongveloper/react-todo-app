import React from 'react';

import './TodoHeader.css';

const TodoHeader = ({ todoLength, selectedLength }) => {
  const today = new Date();

  const dateString = today.toLocaleString('ko-KR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  const dayName = today.toLocaleString('ko-KR', { weekday: 'long' });

  return (
    <div className="TodoHeader">
      <div className="date">
        {dateString}
        <span className="day">({dayName})</span>
      </div>
      <div className="title">오늘의 할 일: {todoLength}개</div>
      <div className="complete">완료된 목록: {selectedLength}개</div>
    </div>
  );
};

export default TodoHeader;
