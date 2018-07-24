import React, { Component, Fragment } from 'react'
import { Image, Segment, Form, Divider, Icon } from 'semantic-ui-react'
import Observer from 'react-intersection-observer'
import { Field, reduxForm } from 'redux-form'
import submit from './submit'
import '../index.css';

const renderField = ({ input, label, type, meta: { touched, error } }) => (
  <div>
    <label>{label}</label>
    <div>
      <input {...input} placeholder='Type your answer here...' type={type} />
      {touched && error && <span>{error}</span>}
    </div>
  </div>
)

class FormGroupShow extends Component {
  render(){
    const { error } = this.props
    // const arrowIcon = <Fragment><i aria-hidden="true" class="arrow right small icon"></i></Fragment>
    const questionLabel = `${this.props.index+1} -> ${this.props.question.content}`

    return (
      <div key={this.props.question.id}>
        <div className='borderless form-group-padding question'>
          <Form size='huge'>
              <Form.Group widths='equal' >
                <Form.Field>
                <Field
                  name={this.props.question.id}
                  type="text"
                  component={renderField}
                  label={questionLabel}
                />
                </Form.Field>
                {error && <strong>{error}</strong>}
              </Form.Group>
              <Divider hidden />
            </Form>
        </div>
      </div>
    )
  }
}
export default FormGroupShow
