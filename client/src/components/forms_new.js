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
  Sidebar
} from 'semantic-ui-react';


class FormsNew extends Component {
  constructor(props) {
    super(props);
    this.state = {menuVisible: false};
  }
  render() {
    return <div>
      <Menu secondary attached="top">
        <Menu.Item onClick={() => this.setState({ menuVisible: !this.state.menuVisible })} >
          <Icon name="sidebar" />Menu
        </Menu.Item>
      </Menu>
    <Sidebar.Pushable as={Segment} attached="bottom" >
      <Sidebar as={Menu} animation="uncover" visible={this.state.menuVisible} icon="labeled" vertical inline inverted>
        <Menu.Item><Icon name="home" />Home</Menu.Item>
        <Menu.Item><Icon name="block layout" />Topics</Menu.Item>
        <Menu.Item><Icon name="smile" />Friends</Menu.Item>
        <Menu.Item><Icon name="calendar" />History</Menu.Item>
      </Sidebar>
       <Sidebar.Pusher>
            <Segment basic>
              <Header as="h3">Application Content</Header>
                <p></p>
                <p></p>
                <p></p>
                <p></p>
            </Segment>
       </Sidebar.Pusher>
    </Sidebar.Pushable>
    </div>
  }
}

export default FormsNew