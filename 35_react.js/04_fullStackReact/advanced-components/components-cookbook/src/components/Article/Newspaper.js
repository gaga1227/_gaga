import React from 'react';

const Newspaper = props => {
  const element = props => (<section>{props.children}</section>);

  return (
    <MultiChildContainer component={element}>
      {props.children}
    </MultiChildContainer>
  )
}

export default Newspaper
