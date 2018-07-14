import React, { Component, Fragment } from 'react'
import { Button, Dimmer, Image, Segment, Form, Divider, Icon } from 'semantic-ui-react'
import Observer from 'react-intersection-observer'
import '../index.css';


class FormGroupShow extends Component {
  state = {}

  handleShow = () => this.setState({ active: true })
  handleHide = () => this.setState({ active: false })
  handleChange (inView) {
   console.log('handle change called:', inView)
   inView ? this.handleHide() : this.handleShow()
 }
  render(){
    const { active } = this.state
    const arrowIcon = <Fragment><i aria-hidden="true" class="arrow right small icon"></i></Fragment>
    const questionLabel = `${this.props.index+1} -> ${this.props.question.content}`

    return (
      <div>
      <Observer onChange={(inView) => {this.handleChange(inView)}} threshold='.9999' >
        <Dimmer.Dimmable as={Segment} dimmed={active} className='borderless form-group-padding'>
          <Dimmer active={active} inverted onClickOutside={this.handleHide} />
            <Form size='huge'>
                <Form.Group widths='equal' >
                  <Form.Field label={questionLabel} control='input' placeholder='Type your answer here...' />
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
