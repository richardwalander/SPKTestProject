import { create } from 'src/Styles/StyleSheet'
import Variables from './Variables'

const List = create({
  container: {
    alignSelf: 'stretch',
    marginTop: Variables.spacing.unit * 0,
    marginBottom: Variables.spacing.unit * 2,
  },
  fullwith: {
    marginLeft: 0,
    marginRight: 0,
  },
  nopadding: {
    padding: Variables.spacing.unit * 0,
  },
})

export default List
