import React from 'react';
import "./Alert.css"

interface AlertProps  { 
  children: React.ReactNode
}
function Alert({children}: AlertProps) {
  return (
    <div className="alert">
      {children}
    </div>
  );
}

export default Alert;