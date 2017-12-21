import React from 'react'
import { Text } from 'react-native'
import * as Theme from 'src/Styles/Theme'

const Typography = ({
  children,
  type,
  align,
  style,
  primary,
}) => {
  let styles = []
  if (!type) {
    styles.push(Theme.Typography.body)
  } else {
    styles.push(Theme.Typography[type])
  }
  switch (align) {
    case 'center':
      styles.push(Theme.Typography.alignCenter)
      break
    case 'right':
      styles.push(Theme.Typography.alignRight)
      break
  }
  if (primary) styles.push(Theme.Typography.primary)
  if (style) styles.push(style)
  return (
    <Text style={styles}>{children}</Text>
  )
}

export default Typography
