import PropTypes from 'prop-types'
import React, { Component } from 'react';
import { Button,
  Container,
  Divider,
  Dropdown,
  Header,
  Message,
  Segment,
  Menu,
  Icon,
  Sidebar,
  Grid,
  Image,
  Form
} from 'semantic-ui-react';
import QuestionText from './question_text'
import VerticalSidebar from './vertical_sidebar'

class FormsEdit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      animation: 'slide along',
      direction: 'left',
      dimmed: false,
      visible: false,
    };
  }

  handleAnimationChange = () => (
    this.setState({ visible: !this.state.visible }))

  render() {
    const { animation, dimmed, direction, visible } = this.state
    const vertical = direction === 'bottom' || direction === 'top'
    return (
      <div>
        <Button disabled={vertical} onClick={this.handleAnimationChange}>
          Menu
        </Button>
        <Sidebar.Pushable as={Segment}>
            <VerticalSidebar animation={animation} direction={direction} visible={visible} />
          <Sidebar.Pusher dimmed={dimmed && visible}>
            <Segment basic>
              <Grid>
                <Grid.Row>
                  <Grid.Column width={8}>
                    <Header as='h3'>Application Content</Header>
                    <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
                    <QuestionText />
                  </Grid.Column>
                  <Grid.Column width={8}>
                    <Header as='h3'>Application Content</Header>
                    <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
                    <QuestionText />
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </Segment>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </div>
    )
  }
}

export default FormsEdit
