import { ReactNode } from 'react'
import { TouchableOpacity, TouchableOpacityProps } from 'react-native'

import { styles } from './styles'

type IconButtonProps = {
  children: ReactNode
} & TouchableOpacityProps

export function IconButton({ children, ...rest }: IconButtonProps) {
  return (
    <TouchableOpacity style={styles.container} {...rest}>
      {children}
    </TouchableOpacity>
  )
}
