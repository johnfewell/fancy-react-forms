import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { Field, reduxForm } from 'redux-form';

import { Button, Form } from 'semantic-ui-react';

import semanticFormField from './semantic-ui-form';
import { required, number, email } from './validation';

const options = [
  { key: '0', text: 'Option 1', value: '0' },
  { key: '1', text: 'Option 2', value: '1' }
];

const ComponentForm = (props) => {
  return (
    <Form name="product" onSubmit={props.handleSubmit(props.onSubmit)}>
      <Field name="selectExample" component={semanticFormField} as={Form.Select} options={options} label="Select label" placeholder="Select an option" validate={required} />
      <Field name="textInputExample" component={semanticFormField} as={Form.Input} type="text" label="Input label" placeholder="Text Input" validate={required} />
      <Field name="numberInputExample" component={semanticFormField} as={Form.Input} type="text" label="Number label" placeholder="Number Input" validate={number} />
      <Field name="emailInputExample"
      component={semanticFormField} as={Form.Input}
      type="email" label="Email label" placeholder="Email Input"
      validate={[required, email]} />
      <Button primary loading={props.submitting} disabled={props.pristine || props.submitting}>Submit</Button>
    </Form>
  );
};

ComponentForm.propTypes = {
  handleSubmit: PropTypes.func,
  reset: PropTypes.func,
  onSubmit: PropTypes.func,
  pristine: PropTypes.bool,
  submitting: PropTypes.bool
};

export default compose(
  reduxForm({
    form: 'yourComponent',
    enableReinitialize: true
  })
)(ComponentForm);
