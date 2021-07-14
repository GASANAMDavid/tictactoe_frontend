import React from "react";
import Cell from "./Cell";

function Board({ board, onCellClick }) {
  let cellIndex = 0;
  
  const cellStyle = {
    width: `${100 / board.length}%`,
  };

  return (
    <div className='board'>
      {board.map((row) => {
        return row.map((col) => {
          cellIndex += 1;
          return (
            <Cell
              key={cellIndex}
              cellPosition={cellIndex}
              onClick={onCellClick}
              cellSymbol={col}
              cellStyle={cellStyle}
            />
          );
        });
      })}
    </div>
  );
}

export default Board;
