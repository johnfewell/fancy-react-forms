import ComponentForm from '../components/your-component';
import React, { Component } from 'react';

export default class FormsNew extends Component {

  // Capturing redux form values from redux form store (pay attention to the name we defined in the previous component)
  onSubmit = values => {(
    values.selectExample,
    values.textInputExample,
    values.numberInputExample,
    values.emailInputExample
  )
  debugger
};

  render() {
    return (
      <ComponentForm onSubmit={this.onSubmit} />
    );
  }
}
