import React, { Component } from 'react';

class Search extends Component {
  constructor(props) {
    super(props);
  }

  /**
   * React:
   * - called after initial render
   */
  componentDidMount() {
    // call ref node method directly
    // auto focus on search input DOM node
    if (this.input) {
      this.input.focus();
    }
  }

  render() {
    const { term, onChange, children } = this.props;

    /**
     * React:
     * - use 'ref' attribute to assign DOM node into class
     */
    return (
      <div className="app-search">
        <b>{children}</b>
        <input type="text"
          onChange={onChange}
          value={term}
          ref={(node) => this.input = node} />
      </div>
    )
  }
}

export default Search;