import React, { Component } from 'react';

const Button = ({disabled, className = 'btn', onClick, children}) =>
  <button
    type="button"
    disabled={disabled}
    className={className}
    onClick={onClick}>
    {children}
  </button>

export default Button;