import Colors from './Colors'
import { create } from 'src/Styles/StyleSheet'

const Typography = create({
  h1: {
    fontSize: 36,
  },
  h2: {
    fontSize: 32,
  },
  h3: {
    fontSize: 28,
  },
  h4: {
    fontSize: 24,
  },
  h5: {
    fontSize: 20,
  },
  h6: {
    fontSize: 18,
  },
  body: {
    fontSize: 14,
  },
  lable: {
    fontSize: 14,
    color: Colors.primary,
  },
  alignCenter: {
    textAlign: 'center',
  },
  alignRight: {
    textAlign: 'right',
  },
  primary: {
    color: Colors.primary,
  },
})

export default Typography
