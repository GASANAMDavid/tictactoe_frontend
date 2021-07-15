import React from "react";

const Cell = ({
  cellPosition,
  onClick,
  cellSymbol,
  cellState,
  onInvalidMove
}) => {
  const handleCellClick = () => {
    cellState ? onClick(cellPosition) : onInvalidMove();
  };
  return (
    <div className='cell' onClick={() => handleCellClick(cellPosition)}>
      {cellSymbol}
    </div>
  );
};

export default Cell;
