import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
import React, { Component } from 'react'
import {
  Header,
  Icon,
  Image,
  Menu,
  Sidebar,
} from 'semantic-ui-react'

const VerticalSidebar = ({ animation, direction, visible, onDeleteClick }) => (
  <Sidebar
    as={Menu}
    animation={animation}
    direction={direction}
    icon='labeled'
    inverted
    vertical
    visible={visible}
    width='thin'
  >
    <Link to="/">
      <Menu.Item as='a'>
        <Icon name='home' />
        Home
      </Menu.Item>
    </Link>
    <Menu.Item as='a'>
      <Icon name='orange tasks icon' />
      Long Text
    </Menu.Item>
    <Menu.Item as='a'>
      <Icon name='camera' />
      Channels
    </Menu.Item>
    <Menu.Item as='a' onClick={() => { if (window.confirm('Are you sure you wish to delete this form?')) onDeleteClick() } }>
      <Icon name='trash alternate' />
      Delete
    </Menu.Item>
  </Sidebar>
)

VerticalSidebar.propTypes = {
  animation: PropTypes.string,
  direction: PropTypes.string,
  visible: PropTypes.bool,
}

export default VerticalSidebar
