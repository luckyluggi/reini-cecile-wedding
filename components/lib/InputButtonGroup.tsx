import React, { ChangeEventHandler } from 'react';
import "./InputButtonGroup.css"

interface InputButtonGroupProps  { 
  children: React.ReactNode,
  className?: string
}

function InputButtonGroup(props: InputButtonGroupProps) {
  return (
    <div className={`input-button-group ${props.className}`}>{props.children}</div>
  );
}

export default InputButtonGroup;