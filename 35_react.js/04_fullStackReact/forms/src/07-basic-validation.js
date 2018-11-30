import React from 'react';
import isEmail from 'validator/lib/isEmail';

const content = document.createElement('div');
document.body.appendChild(content);

module.exports = class extends React.Component {
  static displayName = "07-basic-validation";

  state = {
    fields: {
      name: '',
      email: '',
    },
    fieldErrors: {}, // initial validation error states
    people: [],
  };

  onFormSubmit = (evt) => {
    const people = [ ...this.state.people ];
    const person = this.state.fields;
    const fieldErrors = this.validate(person); // get validation errors
    this.setState({ fieldErrors });
    evt.preventDefault();

    // if has validation errors, exit here, not updating people list
    if (Object.keys(fieldErrors).length) return;

    this.setState({
      people: people.concat(person),
      fields: {
        name: '',
        email: '',
      },
    });
  };

  onInputChange = (evt) => {
    const fields = this.state.fields;
    fields[evt.target.name] = evt.target.value;
    this.setState({ fields });
  };

  validate = (person) => {
    const errors = {}; // returns new object

    // required fields validation
    if (!person.name) errors.name = 'Name Required';
    if (!person.email) errors.email = 'Email Required';

    // email format validation
    if (person.email && !isEmail(person.email)) errors.email = 'Invalid Email';
    return errors;
  };

  render() {
    return (
      <div>
        <h1>Sign Up Sheet</h1>

        <form onSubmit={this.onFormSubmit}>

          <input
            placeholder='Name'
            name='name'
            value={this.state.fields.name}
            onChange={this.onInputChange}
          />

          {/* validation error display */}
          <span style={{ color: 'red' }}>{ this.state.fieldErrors.name }</span>

          <br />

          <input
            placeholder='Email'
            name='email'
            value={this.state.fields.email}
            onChange={this.onInputChange}
          />

          {/* validation error display */}
          <span style={{ color: 'red' }}>{ this.state.fieldErrors.email }</span>

          <br />

          <input type='submit' />
        </form>

        <div>
          <h3>People</h3>
          <ul>
            { this.state.people.map(({ name, email }, i) =>
              <li key={i}>{name} ({ email })</li>
            ) }
          </ul>
        </div>
      </div>
    );
  }
};
