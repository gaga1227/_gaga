import React, { Component } from 'react';
import Button from './Button';

/**
 * React:
 * - use stateless functional component when state and lifecycle not needed
 */

const AddItem = ({list, onClick}) =>
  <div className="app-add">
    <b>Total items: {list.length}</b>
    <Button onClick={onClick}>add item</Button>
  </div>

export default AddItem;