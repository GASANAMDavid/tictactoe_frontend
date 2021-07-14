import React from "react";

const Cell = ({ cellPosition, onClick, cellSymbol, cellStyle }) => {
  return (
    <div
      className='cell'
      style={ cellStyle }
      onClick={() => onClick(cellPosition)}
    >
      {cellSymbol}
    </div>
  );
};

export default Cell;
