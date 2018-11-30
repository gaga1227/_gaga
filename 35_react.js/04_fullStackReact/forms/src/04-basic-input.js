import React from 'react';

const content = document.createElement('div');
document.body.appendChild(content);

module.exports = class extends React.Component {
  static displayName = "04-basic-input";
  state = { names: [] }; // <-- initial state

  // auto focus on input
  componentDidMount() {
    // using ref callback pattern
    const nameInput = this.inputElement; // this.refs.name; string ref is considered legacy now
    if (nameInput) {
      nameInput.focus();
    }
  }

  setInputRef = element => {
    this.inputElement = element;
  };

  onFormSubmit = (evt) => {
    const name = this.inputElement.value; // this.refs.name.value;
    const names = [ ...this.state.names, name ];
    this.setState({ names: names });
    this.inputElement.value = ''; // reset input value
    evt.preventDefault();
  };

  render() {
    return (
      <div>
        <h1>Sign Up Sheet</h1>

        <form onSubmit={this.onFormSubmit}>
          <input
            placeholder='Name'
            ref={this.setInputRef}
          />

          <input type='submit' />
        </form>

        <div>
          <h3>Names</h3>
          <ul>
            { this.state.names.map((name, i) => <li key={i}>{name}</li>) }
          </ul>
        </div>
      </div>
    );
  }
};
