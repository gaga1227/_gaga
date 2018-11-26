import PropTypes from 'prop-types';
import React, {Component} from 'react';

const counterStyle = {
  width: '50px',
  textAlign: 'center',
  backgroundColor: 'aliceblue',
  padding: '10px'
};

class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: this.props.initialValue
    };

    // Note: no need to bind due to methods are defined as arrow functions so have access to 'this'
    // this.increment = this.increment.bind(this);
    // this.decrement = this.decrement.bind(this);
  }

  // Note:
  // Whenever a state transition depends on the current state, using a function to set the state helps to
  // avoid the chance for such enigmatic bugs to materialize
  // due to setState is async, so rather than return a static state object here right away,
  // return a callback that will return the correct state object when eventually run when react updates the state
  decrement = () => {
    this.setState(prevState => {
      return {
        value: prevState.value - 1
      };
    });
  };

  increment = () => {
    this.setState(prevState => {
      return {
        value: prevState.value + 1
      };
    });
  };

  render() {
    return (
      <div style={counterStyle} key="counter">
        {this.state.value}
        <p>
          <button onClick={this.increment}>+</button>
          <button onClick={this.decrement}>-</button>
        </p>
      </div>
    );
  }
}

Counter.propTypes = {
  initialValue: PropTypes.number
};

Counter.defaultProps = {
  initialValue: 120
};

export default Counter;
