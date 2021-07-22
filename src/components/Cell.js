import React from "react";

const Cell = ({
  cellPosition,
  onClick,
  cellSymbol,
  isOngoing,
  onFinishedGame
}) => {
  const handleCellClick = () => {
    isOngoing ? onClick(cellPosition) : onFinishedGame()
  };
  return (
    <div className='cell' onClick={handleCellClick}>
      {cellSymbol}
    </div>
  );
};

export default Cell;
