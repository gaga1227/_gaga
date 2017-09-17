import React, { Component } from 'react';

class AppChap02 extends Component {
  constructor(props) {
    /**
     * React:
     * - sets 'this.props' in super method
     * - define 'list' in 'this.state', resides in the internal component state
     * - Don't mutate the state directly, use 'setState()'
     */
    super(props);

    /**
     * ES6:
     * - Object Initializer can use shorthand proprty syntax to initialize your objects more concise
     * - when property name is same as the variable name e.g. 'list'
     * - can define methods directly without property name e.g. 'getListSize()'
     */
    const initialList = [1, 2, 3, 4, 5];
    this.state = {
      term: '',
      list: [].concat(initialList),
      getListSize(list) { return list.length }
    };

    // bind class method
    this.onSearchItem = this.onSearchItem.bind(this);
  }

  onSearchItem(e) {
    // update state with new term
    // filtering happends in render
    this.setState({
      term: e.target.value
    });
  }

  onAddItem() {
    const lastItem = this.state.list[this.state.list.length - 1];
    const updatedList = this.state.list.concat([lastItem + 1]);
    this.setState({
      list: updatedList
    });
  }

  onDismiss(item) {
    // item with filter espression returns false gets filters out
    const updatedList = this.state.list.filter(el => el !== item);
    this.setState({
      list: updatedList,
    });
  }

  render() {
    /**
     * ES6:
     * - use object destruturing to extract values and assign to same named vars
     * - use 'includes' to replace 'indexOf'
     */
    const {term, list} = this.state;
    const listElements = list
      .filter(item =>
        term.includes(item + '')
      )
      .map(item =>
        <div key={item}>
          {item}
          <button
            type="button"
            onClick={() => this.onDismiss(item)}>remove</button>
        </div>
      );

    /**
     * React:
     * - must return a react.element as root container
     * - cannot return an array of react.element
     * - uses 'className' for 'class' attr
     */
    return (
      <div className="chaptor" id="AppChap02">
        <h3>Chaptor 2</h3>
        {/**
         * search
         */}
        <div className="app-search">
          <b>Search items:</b>
          <p><input type="text" onChange={this.onSearchItem} value={term} /></p>
        </div>

        {/**
         * add
         */}
        <div className="app-add">
          <b>Total items: {this.state.getListSize(list)}</b>
          <button type="button" onClick={() => this.onAddItem()}>add item</button>
        </div>

        {/**
         * list
         */}
        <div className="app-list">
          {listElements}
        </div>
      </div>
    );
  }
}

export default AppChap02;
// Chaptor 2 completed