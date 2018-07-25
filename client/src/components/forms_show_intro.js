import React, { Component } from 'react'
import { Form, Header, Transition, Container, Loader } from 'semantic-ui-react'

export default class FormsShowIntro extends Component {
  state = { animation: 'fade down', duration: 500, visible: true }

  handleChange = (e, { name, value }) => this.setState({ [name]: value })

  handleVisibility = () => this.setState({ visible: !this.state.visible })

  renderHeader(){
    if (this.props.form == null) {
      return <Loader active inline='centered' />
    } else {
    return (
      <div>
      <Header as='h1'>{this.props.form.name}</Header>
      <p>{this.props.form.description}</p>
      </div>
    )
    }
  }
  render() {
    const { animation, duration, visible } = this.state

    return (
          <Transition.Group animation={animation} duration={duration}>
            {visible && <div>
              <Container text textAlign='center'>
                {this.renderHeader()}
                <Form.Button size='huge' content={'Start'} onClick={this.handleVisibility} />
              </Container>
            <div className='form-spacer'></div>
            </div>
          }
          </Transition.Group>
    )
  }
}
