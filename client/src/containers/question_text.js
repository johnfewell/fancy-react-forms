import React, { Component } from 'react';
import { Form } from 'semantic-ui-react';

export default class QuestionText extends Component {
  constructor(props) {
    super(props);

    this.state = { questionContent: '' };
    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange(event) {
    console.log(event.target.value);
    this.setState({ questionContent: event.target.value })
  }

  onFormSubmit(event) {
    event.preventDefault();
  }

  render () {
    return (
      <Form onSubmit={this.onFormSubmit} className="input-group">
        <Form.Field>
          <input
            placeholder="Type your question here"
            className="form-control"
            value={this.state.questionContent}
            onChange={this.onInputChange}
          />
        </Form.Field>
      </Form>
    )
  }
}
