import React from "react";
import Cell from "./Cell";

function Board({ board, onCellClick, onInvalidMove }) {
  let cellIndex = 0;

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
              cellState={col === '-'}
              key={cellIndex}
              cellPosition={cellIndex}
              onClick={onCellClick}
              cellSymbol={col}
              onInvalidMove={onInvalidMove}
            />
          );
        });
      })}
    </div>
  );
}

export default Board;
