import React from 'react';

const Article = props => {
  return (
    <div className="article">
      <h1>{props.headline}</h1>
      {props.children}
    </div>
  )
};

export default Article;