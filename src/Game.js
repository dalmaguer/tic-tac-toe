import React, { useState } from "react";
import Board from "./Board";
import * as common from "./utils";

const Game = () => {
  const initialState = {
    history: [{ squares: Array(9).fill(null) }],
    xIsNext: true,
  };
  const [game, setGame] = useState(initialState);

  const current = game.history[game.history.length - 1];
  const winner = common.calculateWinner(current.squares);
  const winnerLines = common.calculateWinnerLines(current.squares);
  const finished = common.gameFinished(current.squares);

  let status = "";
  if (winner) {
    status = `The winner is ${winner}`;
  } else if (finished) status = `The game is over`;
  else {
    status = `Turn for player ${game.xIsNext ? "X" : "O"}`;
  }

  const handleClick = (i) => {
    const squares = current.squares.slice();

    if (winner || squares[i]) {
      return;
    }

    const letter = game.xIsNext ? "X" : "O";
    squares[i] = letter;

    setGame({
      ...game,
      history: game.history.concat({ squares }),
      xIsNext: !game.xIsNext,
    });
  };

  const goToStep = (i) => {
    setGame({
      ...game,
      history: game.history.slice(0, i + 1),
      xIsNext: i % 2 ? false : true,
    });
  };

  return (
    <div className="game">
      <div className="game-board">
        <Board
          current={current}
          onClick={(i) => handleClick(i)}
          winnerLines={winnerLines}
        />
      </div>
      <div className="game-info">
        <div>
          <b>{status}</b>
        </div>
        <ul>
          <li key={0}>
            <button onClick={() => goToStep(0)}>New Game</button>
          </li>
          <br />
          {game.history.map((el, index) => {
            if (index && index < game.history.length - 1) {
              return (
                <li key={index}>
                  <button onClick={() => goToStep(index)}>
                    &#8630; {`Back to step ${index}`}
                  </button>
                </li>
              );
            }
            return null;
          })}
        </ul>
      </div>
    </div>
  );
};
export default Game;

