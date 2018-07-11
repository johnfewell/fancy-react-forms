import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'

const HeaderMenu = ({firstUrl, firstString}) => (
      <Menu>
        <Menu.Item
          href={firstUrl}
        >
          {firstString}
        </Menu.Item>
      </Menu>
)

export default HeaderMenu
