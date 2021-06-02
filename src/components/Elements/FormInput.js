import React from 'react';

function FormInput({ handleChange, label, type, ...otherProps }) {
  return (
    <div>
      {label && <label>{label}</label>}
      <input onChange={handleChange} {...otherProps} type={type} />
    </div>
  );
}

export default FormInput;
