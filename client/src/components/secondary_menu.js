import React, { Component } from 'react'
import { Menu, Button, Header, Icon, Label } from 'semantic-ui-react'

const SecondaryMenu = (props) => (
<Menu secondary>
  <Menu.Item>
  <Header as='h3'>
    My workspace
  </Header>
  </Menu.Item>
<Menu.Menu position='right'>
  <Menu.Item>
    <Button  icon="plus" content="New Form" labelPostition="left" color="teal"/>
  </Menu.Item>
  </Menu.Menu>
</Menu>
)
export default SecondaryMenu
