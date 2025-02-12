import { useState } from "react";
import "./App.css";

function Square({ value = null, squareClicked }) {
  return (
    <button className="square" onClick={squareClicked}>
      {value}
    </button>
  );
}
function winner(squares) {
  const win = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < win.length; i++) {
    const [a, b, c] = win[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  // let status=null;
  // const [status, setStatus] = useState(null);
  let won = winner(squares); 
  let tie = checkTie(squares);
  let status;
  if (won) {
    status = "Winner is " + won;
  } 
  else if(tie){
    status = "Game is a tie, No one wins"
  }
  else {
    status = "The next turn is of Player " + (xIsNext ? "X" : "O");
  }
  

  function checkTie(squares) {
    for (let i = 0; i < 9; i++) {
      if (squares[i]==null) {
        return false;
      }
    }
    return true;
  }
  

  function handleClick(i) {

    if (squares[i] || winner(squares) || checkTie(squares)) {
      return;
    }
    const newSquares = squares.slice(); //Making a copy of squares so to maintsin immutability
    xIsNext ? (newSquares[i] = "X") : (newSquares[i] = "O");

    setXIsNext(!xIsNext);
    setSquares(newSquares);
    won = null;
  }

  function handleRestart() {
    const sq = Array(9).fill(null);
    setSquares(sq);
    xIsNext(true);
  }

  return (
    <>
      <div className="status">{status}</div>
      <div className="board">
        <div className="board-row">
          <Square
            value={squares[0]}
            squareClicked={() => {
              handleClick(0);
            }}
          />
          <Square
            value={squares[1]}
            squareClicked={() => {
              handleClick(1);
            }}
          />
          <Square
            value={squares[2]}
            squareClicked={() => {
              handleClick(2);
            }}
          />
        </div>
        <div className="board-row">
          <Square
            value={squares[3]}
            squareClicked={() => {
              handleClick(3);
            }}
          />
          <Square
            value={squares[4]}
            squareClicked={() => {
              handleClick(4);
            }}
          />
          <Square
            value={squares[5]}
            squareClicked={() => {
              handleClick(5);
            }}
          />
        </div>
        <div className="board-row">
          <Square
            value={squares[6]}
            squareClicked={() => {
              handleClick(6);
            }}
          />
          <Square
            value={squares[7]}
            squareClicked={() => {
              handleClick(7);
            }}
          />
          <Square
            value={squares[8]}
            squareClicked={() => {
              handleClick(8);
            }}
          />
        </div>
      </div>
      <div className="restart">
        <button className="restartbtn" onClick={handleRestart}>
          Restart Game
        </button>
      </div>
    </>
  );
}

export default Board;
