import React from 'react'
import { Icon, Menu } from 'semantic-ui-react'

const VerticalSidebar = ({submitDelete}) => (
  <Menu icon vertical>
    <Menu.Item  onClick={submitDelete} name='trash'>
      <Icon color='red' size='big' name='trash alternate' />
    </Menu.Item>
  </Menu>
)

export default VerticalSidebar
