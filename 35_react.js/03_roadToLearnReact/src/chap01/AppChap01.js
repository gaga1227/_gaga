import React, { Component } from 'react';

const list = [
  {
    title: 'React',
    url: 'https://facebook.github.io/react/',
    author: 'Jordan Walke',
    num_comments: 3,
    points: 4,
    objectID: 0,
  },
  {
    title: 'Redux',
    url: 'https://github.com/reactjs/redux',
    author: 'Dan Abramov, Andrew Clark',
    num_comments: 2,
    points: 5,
    objectID: 1,
  },
];

class AppChap01 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'React'
    };
  }

  render() {
    /**
     * React:
     * - A 'key' is a special string attribute you need to include when creating lists of elements
     * - Keys help React identify which items have changed, are added, or are removed. 
     * - Keys should be given to the elements inside the array to give the elements a stable identity
     * - 'list' is defined outside of the component
     */
    const elements = list.map(item =>
      <div key={item.objectID}>
        <span>
          <a href={item.url}>{item.title}</a>
        </span>
        <span> {item.author}</span>
        <span> {item.num_comments}</span>
        <span> {item.points}</span>
      </div>
    );

    /**
     * JSX:
     * - 'className' compiles to 'class' attribute
     */
    return (
      <div className="chaptor" id="AppChap01">
        <h3>Chaptor 1</h3>
        {elements}
      </div>
    );
  }
}

export default AppChap01;
// Chaptor 1 completed