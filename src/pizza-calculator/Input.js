import React from 'react';
const Input = ({ label, value, onValueChange }) => {
  return (
    <div>
      <div>{label}</div>
      <input type="text" value={value} onChange={onValueChange} />
    </div>
  );
};

export default Input;
