import React from "react";

function Button({ color, text, onClick }) {
  return (
    <div>
      <button type='button'
        onClick={onClick}
        style={{ backgroundColor: color }}
        className='btn-create'
      >
        {text}
      </button>
    </div>
  );
}

export default Button;
