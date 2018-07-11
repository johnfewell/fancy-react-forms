import React, { Component } from 'react'
import {
  Header,
  Icon,
  Image,
  Menu
} from 'semantic-ui-react'

const HeaderMenu = () => (
     <Menu stackable>
       <Menu.Item name="search">
       search
       </Menu.Item>

       <Menu.Item name="username">
        test
       </Menu.Item>

       <Menu.Item name="bell">
         TEst
       </Menu.Item>
       <Menu.Menu position="right">
         <Menu.Item name="search">
         logo
         </Menu.Item>
       </Menu.Menu>
     </Menu>
)

export default HeaderMenu
