import React, { Component } from 'react'
import { Menu, Button, Header, Icon, Label, Dropdown } from 'semantic-ui-react'

const SecondaryMenu = ({firstUrl, firstString}) => (
<Menu secondary>
  <Menu.Item>
  <Header as='h3'>
    My workspace
  </Header>
  </Menu.Item>
<Menu.Menu position='right'>
  <Menu.Item href={firstUrl}>
    <Button icon="plus" content="New Form" labelPostition="left" color="teal"/>
  </Menu.Item>
  </Menu.Menu>
</Menu>
)
export default SecondaryMenu

  //
