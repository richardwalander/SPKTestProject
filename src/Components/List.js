import React from 'react'
import { List } from 'react-native-elements'
import * as Theme from 'src/Styles/Theme'

const BaseList = ({
  children,
}) => {
  return <List containerStyle={Theme.List.container}>{children}</List>
}

export default BaseList
