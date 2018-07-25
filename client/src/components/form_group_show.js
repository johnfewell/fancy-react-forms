import React from 'react'
import { Form, Divider } from 'semantic-ui-react'
import { Field, reduxForm } from 'redux-form'

const FormGroupShow = props => {
    // const arrowIcon = <Fragment><i aria-hidden="true" class="arrow right small icon"></i></Fragment>
    const renderField = ({ input, label, type, meta: { touched, error } }) => (
      <div>
        <label>{label}</label>
        <div>
          <input {...input} placeholder='Type your answer here...' type={type} />
        </div>
      </div>
    )

    const questionLabel = `${props.index+1} -> ${props.question.content}`

    return (
      <div key={props.question.id}>
        <div className='borderless form-group-padding question'>
          <Form size='huge'>
              <Form.Group widths='equal' >
                <Form.Field>
                <Field
                  name={props.question.id.toString()}
                  type="text"
                  component={renderField}
                  label={questionLabel}
                />
                </Form.Field>
              </Form.Group>
              <Divider hidden />
            </Form>
        </div>
      </div>
    )}

export default FormGroupShow
