import React, { Component } from 'react';

import Search from './components/Search';
import AddItem from './components/AddItem';
import List from './components/List';

class AppChap02 extends Component {
  constructor(props) {
    super(props);

    const initialList = [1, 2, 3];
    this.state = {
      term: '',
      list: [].concat(initialList)
    };
  }

  onSearchItem(e) {
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
    const updatedList = this.state.list.filter(el => el !== item);
    this.setState({
      list: updatedList,
    });
  }

  render() {
    const {term, list} = this.state;

    /**
     * Split into multiple components
     */
    return (
      <div className="chaptor" id="AppChap02">
        <h3>Chaptor 2</h3>

        <Search
          term={term}
          onChange={e => this.onSearchItem(e)}>
          Search items:
        </Search>

        <AddItem
          list={list}
          onClick={() => this.onAddItem()} />

        <List
          list={list}
          term={term}
          onClick={(item) => this.onDismiss(item)} />
      </div>
    );
  }
}

export default AppChap02;
// Chaptor 2 completed