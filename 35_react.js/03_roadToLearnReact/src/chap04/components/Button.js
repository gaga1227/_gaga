import React, { Component } from 'react';
import PropTypes from 'prop-types';

const Button = ({disabled, className, onClick, children}) =>
  <button
    type="button"
    disabled={disabled}
    className={className}
    onClick={onClick}>
    {children}
  </button>

/**
 * React:
 * - default prop values
 */
Button.defaultProps = {
  className: 'btn',
  onClick: () => window.alert('Clicked')
};

/**
 * React:
 * - type check interface using propTypes
 * - validators start after passed in value or default value is evaluated
 * - gives warning in dev mode
 */
Button.propTypes = {
  disabled: PropTypes.bool,
  className: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node
};

export default Button;