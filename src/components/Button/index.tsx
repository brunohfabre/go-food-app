import { Text, TouchableOpacity, TouchableOpacityProps } from 'react-native'

import { styles } from './styles'

type ButtonProps = {
  children: string
} & TouchableOpacityProps

export function Button({ children, ...rest }: ButtonProps) {
  return (
    <TouchableOpacity style={styles.container} activeOpacity={0.6} {...rest}>
      <Text style={styles.text}>{children}</Text>
    </TouchableOpacity>
  )
}
