import React, { Component } from 'react'
import { Menu, Button, Header, Icon, Label, Dropdown } from 'semantic-ui-react'

const HeaderMenu = ({firstUrl, firstString}) => (
<Menu pointing secondary attached='top'>
  <Menu.Item >
  <Icon rotated='clockwise' name='star half full' size='huge'/>
  </Menu.Item>

<Menu.Menu position='right'>
  <Menu.Item href={firstUrl}>
    <Label circular color='brown' size='big'>
      JF
    </Label>

    <Dropdown item icon='angle down' size='big' simple>
      <Dropdown.Menu>
      
        <Dropdown.Item>Open</Dropdown.Item>
        <Dropdown.Item>Save...</Dropdown.Item>
        <Dropdown.Item>Edit Permissions</Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Header>Export</Dropdown.Header>
        <Dropdown.Item>Share</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  </Menu.Item>
  </Menu.Menu>
</Menu>
)
export default HeaderMenu

  // <Button>{firstString}</Button>
