import React, { Component } from 'react';

/**
 * ES6:
 * - use default parameter value for 'className'
 */
const Button = ({className = 'btn', onClick, children}) =>
  <button
    type="button"
    className={className}
    onClick={onClick}>
    {children}
  </button>

export default Button;