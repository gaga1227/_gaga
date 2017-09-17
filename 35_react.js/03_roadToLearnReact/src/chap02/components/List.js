import React, { Component } from 'react';
import Button from './Button';

const List = ({term, list, onClick}) => {
  const listElements = list
    .filter(item => {
      if (term.trim() === '*' || term.trim() === '') {
        return true;
      } else {
        return term.includes(item + '')
      }
    })
    .map(item =>
      <div key={item}>
        {item}
        <Button onClick={() => onClick(item)}>remove</Button>
      </div>
    );

  return (
    <div className="app-list">
      {listElements}
    </div>
  );
};

export default List;