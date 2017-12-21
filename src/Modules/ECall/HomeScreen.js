import React from 'react'
import { View, ScrollView } from 'react-native'
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
  topcontent: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: Theme.Variables.spacing.unit * 8,
    paddingLeft: Theme.Variables.spacing.unit * 8,
    paddingRight: Theme.Variables.spacing.unit * 8,
  },
  iconcontainer: {
    backgroundColor: Theme.Colors.primary,
    width: 50,
    height: 50,
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: Theme.Variables.spacing.unit * 6
  },
  lable: {
    marginLeft: Theme.Variables.spacing.unit * 0,
  },
  lablenopadding: {
    marginLeft: Theme.Variables.spacing.unit * 3,
  },
  title: {
    marginLeft: Theme.Variables.spacing.unit * 1,
  },
  contactlist: {
    paddingTop: Theme.Variables.spacing.unit * 3,
  },
  iconbg: {
    backgroundColor: Theme.Colors.primary,
    height: 24,
    width: 24,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: Theme.Variables.spacing.unit * 1,
    marginRight: Theme.Variables.spacing.unit * 2,
  },
})

const HomeScreen = ({ navigation }) => (
  <ScrollView
    style={{backgroundColor: Theme.Colors.bg}}
    contentContainerStyle={[{ justifyContent: 'flex-start' }]}>

    <Card fullwith>

      <View style={styles.topcontent}>
        <View style={styles.iconcontainer}>
          <Icon name='plus' type='font-awesome' color={Theme.Colors.white} size={46}/>
        </View>
        <Typography align="center">
          {'Emergency Notifications will notify your emergency contacts in case of a severe accident.'}
        </Typography>
      </View>

      <Typography type="lable" style={styles.lable}>{'Your information'}</Typography>

      <ListItem title={
        <TextInput placeholder="Name" />
      } hideChevron />

      <ListItem title={
        <TextInput placeholder="Phone Number" />
      } hideChevron />
    </Card>

    <Card fullwith noPadding style={styles.contactlist}>

      <Typography type="lable" style={styles.lablenopadding}>{'Emergency contacts'}</Typography>

      <ListItem
        leftIcon={
          <View style={styles.iconbg}>
            <Icon name='plus' type='font-awesome' color={Theme.Colors.white} size={16}/>
          </View>
        }
        title={
          <Typography>{'Add emergency contact'}</Typography>
        }
        hideChevron
        onPress={()=>navigation.navigate('AddEmergencyContact')}
      />

    </Card>

    <Card fullwith noPadding style={styles.contactlist}>

      <Typography type="lable" style={styles.lablenopadding}>{'Emergency notification'}</Typography>

      <ListItem title={
        <Typography style={styles.title}>{'Disable'}</Typography>
      } hideChevron switchButton switchOnTintColor={Theme.Colors.primary} />

    </Card>

  </ScrollView>
)

HomeScreen.navigationOptions = ({navigation}) => {
  return {
    title: 'Emergency Notificaton',
  }
}

export default HomeScreen
