import React, { Component } from 'react';
import Button from './components/Button';

class AppChap04 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      buttonClickCount: 0
    };

    this.onButtonClick = this.onButtonClick.bind(this);
  }

  onButtonClick() {
    /**
     * React:
     * - setState is async
     * - need to use callback function if previous state is required for new state
     */
    this.setState((prevState, props) => {
      const increment = props.clickIncrement ? parseInt(props.clickIncrement, 10) : 1;
      const newCount = prevState.buttonClickCount + increment;
      return { buttonClickCount: newCount }
    });
  }

  render() {
    return (
      <div className="chaptor" id="AppChap04">
        <h3>Chaptor 4</h3>

        <Button
          className="btn"
          onClick={this.onButtonClick}>
          {'Button Clicked:' + this.state.buttonClickCount}
        </Button>
      </div>
    );
  }
}

export default AppChap04;
// Chaptor 4 completed