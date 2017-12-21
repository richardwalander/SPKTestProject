import React from 'react'
import { View, TouchableOpacity } from 'react-native'
import {
  Typography,
  Card,
  ListItem,
  Icon,
  TextInput,
} from 'src/Components'
import * as Theme from 'src/Styles/Theme'
import { create } from 'src/Styles/StyleSheet'

const styles = create({
  card: {
    paddingTop: Theme.Variables.spacing.unit * 3,
    paddingBottom: Theme.Variables.spacing.unit * 3,
  },
  savebtn: {
    marginRight: Theme.Variables.spacing.unit * 2,
  },
})

const AddEmergencyContact = () => (
  <View style={[Theme.View.container]}>
    <Card fullwith style={styles.card}>

      <Typography type="lable">{'Details'}</Typography>

      <ListItem title={
        <TextInput placeholder="Name" />
      } hideChevron />

      <ListItem title={
        <TextInput placeholder="Phone Number" />
      } hideChevron />
    </Card>
  </View>
)

AddEmergencyContact.navigationOptions = ({navigation}) => {
  return {
    title: 'Add Emergency Contact',
    headerRight: (
      <TouchableOpacity style={styles.savebtn}>
        <Typography type="h6" align="right" primary>{'Add'}</Typography>
      </TouchableOpacity>
    )
  }
}

export default AddEmergencyContact
