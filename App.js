import React from 'react'
import { View, Text } from 'react-native'
import { StackNavigator } from 'react-navigation'
import * as Theme from 'src/Styles/Theme'

import { HomeScreen, AddEmergencyContact } from 'src/Modules/ECall'

const RootNavigator = StackNavigator({
  Home: {
    screen: HomeScreen,
  },
  AddEmergencyContact: {
    screen: AddEmergencyContact,
  },
}, {
  navigationOptions: {
    headerStyle: {backgroundColor: '#fff'},
  },
})

export default RootNavigator
