import React, { Component, Fragment } from 'react'
import { Dimmer, Image, Segment, Form, Divider, Icon } from 'semantic-ui-react'
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
  state = {}

  handleShow = () => this.setState({ active: true })
  handleHide = () => this.setState({ active: false })
  handleChange (inView) {
   inView ? this.handleHide() : this.handleShow()
 }
  render(){
    const { error } = this.props
    const { active } = this.state
    const arrowIcon = <Fragment><i aria-hidden="true" class="arrow right small icon"></i></Fragment>
    const questionLabel = `${this.props.index+1} -> ${this.props.question.content}`

    return (
      <div key={this.props.index}>
      <Observer onChange={(inView) => {this.handleChange(inView)}} threshold='.9999' >
        <Dimmer.Dimmable as={Segment} dimmed={active} className='borderless form-group-padding'>
          <Dimmer active={active} inverted onClickOutside={this.handleHide} />
            <Form size='huge'>
                <Form.Group widths='equal' >
                  <Field
                    name={this.props.question.id}
                    type="text"
                    component={renderField}
                    label={questionLabel}
                  />
                  {error && <strong>{error}</strong>}
                </Form.Group>
                <Divider hidden />
              </Form>
          </Dimmer.Dimmable>
        </Observer>
      </div>
    )
  }
}
export default FormGroupShow
