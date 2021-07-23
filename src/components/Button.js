import React from "react";

function Button({ bgColor, color, text, onClick }) {
  return (
    <div>
      <button type='button'
        onClick={onClick}
        style={{ backgroundColor: bgColor, color: color}}
        className='btn'
      >
        {text}
      </button>

    </div>
  );
}

Button.defaultProps = {
  color: '#000',
  text: "click me"
}

export default Button;
