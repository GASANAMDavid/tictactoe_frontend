import React from "react";

function Button({ bgColor, text, onClick }) {
  return (
    <div>
      <button type='button'
        onClick={onClick}
        style={{ backgroundColor: bgColor}}
        className='btn'
      >
        {text}
      </button>

    </div>
  );
}

Button.defaultProps = {
  text: "click me"
}

export default Button;
