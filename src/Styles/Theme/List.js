import { create } from 'src/Styles/StyleSheet'
import Variables from './Variables'
import Colors from './Colors'

const List = create({
  container: {
    alignSelf: 'stretch',
  },
  listitem: {
    height: 60,
    paddingLeft: Variables.spacing.unit * 0,
    paddingRight: Variables.spacing.unit * 0,
    paddingBottom: Variables.spacing.unit * 2,
    paddingTop: Variables.spacing.unit * 2,
    justifyContent: 'center',
    borderBottomColor: Colors.ut19,
  },
})

export default List
