import React from 'react'
import { ListItem } from 'react-native-elements'
import * as Theme from 'src/Styles/Theme'

const BaseListItem = (props) => {
  let styles = []
  return <ListItem {...props} containerStyle={Theme.List.listitem}	/>
}

export default BaseListItem
