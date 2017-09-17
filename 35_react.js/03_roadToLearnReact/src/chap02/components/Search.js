import React, { Component } from 'react';

/**
 * React:
 * - use 'children' from 'this.props' to reference child elements
 */
const Search = ({term, onChange, children}) =>
  <div className="app-search">
    <b>{children}</b>
    <input type="text"
      onChange={onChange}
      value={term} />
  </div>

export default Search;