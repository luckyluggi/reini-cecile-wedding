import React, { MouseEventHandler } from 'react';
import "./Button.css"

interface ButtonProps  { 
  onClick: MouseEventHandler<HTMLButtonElement>,
  children: React.ReactNode
}
function Button({children, onClick}: ButtonProps) {
  return (
    <button onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;