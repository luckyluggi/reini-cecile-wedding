import React, { ChangeEventHandler } from 'react';
import "./Input.css"
import { log } from 'console';

interface InputProps  { 
  onChange?: ChangeEventHandler<HTMLInputElement>,
  onEnterPressed?: ChangeEventHandler,
  value: string,
  placeholder: string
  className?: string
}

function Input(props: InputProps) {

  const onKeyUpValue = (event: any) => {
    if (event.key === "Enter" && props.onEnterPressed) {
      props.onEnterPressed(event)
    }
  }

  return (
    <input
      type='text'
      value={props.value}
      onChange={props.onChange}
      placeholder={props.placeholder}
      className={props.className}
      onKeyUp={onKeyUpValue}
    />
  );
}

export default Input;