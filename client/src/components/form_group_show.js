import React, { Component } from 'react'
import { Button, Dimmer, Image, Segment, Form, Divider } from 'semantic-ui-react'
import Observer from 'react-intersection-observer'

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

    return (
      <div>
      <Observer onChange={(inView) => {this.handleChange(inView)}} threshold='.9999' >
        <Dimmer.Dimmable as={Segment} dimmed={active}>
          <Dimmer active={active} inverted onClickOutside={this.handleHide} />
            <Form size='huge'>
                <Form.Group widths='equal'>
                  <Form.Field label={this.props.question.content} control='input' placeholder='Type it in yo' />
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
