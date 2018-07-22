import React, { Component } from 'react'
import { Form, Grid, Header, Transition, Container } from 'semantic-ui-react'

export default class FormsShowIntro extends Component {
  state = { animation: 'fade down', duration: 500, visible: true }

  handleChange = (e, { name, value }) => this.setState({ [name]: value })

  handleVisibility = () => this.setState({ visible: !this.state.visible })

  render() {
    const { animation, duration, visible } = this.state

    return (
          <Transition.Group animation={animation} duration={duration}>
            {visible && <div>
              <Container text textAlign='center'>
                <Header as='h1'>This is some lorem!</Header>
                <Form.Button size='huge' content={'Start'} onClick={this.handleVisibility} />
              </Container>
            <div className='form-spacer'></div>
            </div>
          }
          </Transition.Group>
    )
  }
}
