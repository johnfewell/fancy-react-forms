// import ComponentForm from '../components/your-component';
// import React, { Component } from 'react';
//
// export default class FormsNew extends Component {
//
//   // Capturing redux form values from redux form store (pay attention to the name we defined in the previous component)
//   onSubmit = values => {(
//     values.selectExample,
//     values.textInputExample,
//     values.numberInputExample,
//     values.emailInputExample
//   )
//   debugger
// };
//
//   render() {
//     return (
//       <ComponentForm onSubmit={this.onSubmit} />
//     );
//   }
// }

import React from 'react'
import { Field, FieldArray, reduxForm } from 'redux-form'
import { Button, Checkbox, Form } from 'semantic-ui-react'
import validate from './validate'

const renderField = ({ input, label, type, meta: { touched, error } }) => (
  <div>
    <label>{label}</label>
    <div>
      <input {...input} type={type} placeholder={label} />
      {touched && error && <span>{error}</span>}
    </div>
  </div>
)

const renderHobbies = ({ fields, meta: { error } }) => (
  <ul>
    <li>
      <Button type="button" onClick={() => fields.push()}>
        Add Hobby
      </Button>
    </li>
    {fields.map((hobby, index) => (
      <li key={index}>
        <Button
          type="button"
          title="Remove Hobby"
          onClick={() => fields.remove(index)}
        />
        <Field
          name={hobby}
          type="text"
          component={renderField}
          label={`Hobby #${index + 1}`}
        />
      </li>
    ))}
    {error && <li className="error">{error}</li>}
  </ul>
)

const renderMembers = ({ fields, meta: { error, submitFailed } }) => (
  <ul>
    <li>
      <Button type="button" onClick={() => fields.push({})}>
        Add Member
      </Button>
      {submitFailed && error && <span>{error}</span>}
    </li>
    {fields.map((member, index) => (
      <li key={index}>
        <Button
          type="button"
          title="Remove Member"
          onClick={() => fields.remove(index)}
        />
        <h4>Member #{index + 1}</h4>
        <Field
          name={`${member}.firstName`}
          type="text"
          component={renderField}
          label="First Name"
        />
        <Field
          name={`${member}.lastName`}
          type="text"
          component={renderField}
          label="Last Name"
        />
        <FieldArray name={`${member}.hobbies`} component={renderHobbies} />
      </li>
    ))}
  </ul>
)

const FieldArraysForm = props => {
  const { handleSubmit, pristine, reset, submitting } = props
  return (
    <Form onSubmit={handleSubmit}>
    <Form.Field>
      <Field
        name="clubName"
        type="text"
        component={renderField}
        label="Club Name"
      />
      </Form.Field>
      <FieldArray name="members" component={renderMembers} />
      <div>
        <Button type="submit" disabled={submitting}>
          Submit
        </Button>
        <Button type="button" disabled={pristine || submitting} onClick={reset}>
          Clear Values
        </Button>
      </div>
    </Form>
  )
}

export default reduxForm({
  form: 'fieldArrays', // a unique identifier for this form
  validate
})(FieldArraysForm)
