import React from "react";
import Cell from "./Cell";

function Board({ board, onCellClick, onInvalidMove, isOngoing, onFinishedGame }) {
  let cellIndex = 0;
  const emptySymbol = '-'

  const boardStyle = {
    gridTemplateColumns: `repeat(${board.length}, 1fr)`,
  };

  return (
    <div style={boardStyle} className='board'>
      {board.map((row) => {
        return row.map((col) => {
          cellIndex += 1;
          return (
            <Cell
              key={cellIndex}
              cellPosition={cellIndex}
              onClick={col === emptySymbol ? onCellClick : onInvalidMove}
              cellSymbol={col}
              isOngoing={isOngoing}
              onFinishedGame={onFinishedGame}
            />
          );
        });
      })}
    </div>
  );
}

export default Board;
