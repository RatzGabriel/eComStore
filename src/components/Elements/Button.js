import React from 'react';

function Button({ children, ...other }) {
  return (
    <div>
      <button {...other}>{children}</button>
    </div>
  );
}

export default Button;
