import { Text, TouchableOpacity, TouchableOpacityProps } from 'react-native'

import { styles } from './styles'

type LinkButtonProps = {
  children: string
} & TouchableOpacityProps

export function LinkButton({ children, ...rest }: LinkButtonProps) {
  return (
    <TouchableOpacity {...rest}>
      <Text style={styles.container}>{children}</Text>
    </TouchableOpacity>
  )
}
