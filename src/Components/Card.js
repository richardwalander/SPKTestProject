import React from 'react'
import { Card } from 'react-native-elements'
import * as Theme from 'src/Styles/Theme'

const BaseCard = (props) => {
  let cardstyles = [Theme.Card.container]
  let {
    fullwith,
    style,
    noPadding,
  } = props
  if (fullwith) cardstyles.push(Theme.Card.fullwith)
  if (style) cardstyles.push(style)
  if (noPadding) cardstyles.push(Theme.Card.nopadding)
  return <Card {...props} containerStyle={cardstyles}>{props.children}</Card>
}

export default BaseCard
