import React from 'react';
import Square from './Square';

const Board = ({current, onClick, winnerLines}) => {

  const colors = [
    '#f2fafd','#c6e8f6','#f2fafd',
    '#c6e8f6','#c6e8f6','#c6e8f6',
    '#f2fafd','#c6e8f6','#f2fafd',
  ]

  const renderSquare = (i) => {
    const { squares } = current;
    const winner = winnerLines && winnerLines.includes(i) ? true : false;
    return <Square bgColor={colors[i]} winner={winner} value={squares[i]} onClick={ () => onClick(i) } />;
  };

  return (
    <div>
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  );
};

export default Board;