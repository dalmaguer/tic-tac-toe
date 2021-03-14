import React from 'react';

const Square = ({ value, onClick, bgColor, winner }) => {
  return (
    <button className={`square ${winner ? 'winner' : ''}`} style={{backgroundColor: bgColor}} onClick={onClick}>
      {value}
    </button>
  );
};
export default Square;