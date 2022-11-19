import Svg, { SvgProps, Path } from 'react-native-svg'

import { colors } from '../../styles/colors'

export function EyeFill(props: SvgProps) {
  return (
    <Svg
      width={16}
      height={16}
      viewBox="0 0 256 256"
      fill={colors.gray9}
      {...props}
    >
      <Path fill="none" d="M0 0h256v256H0z" />
      <Path d="M247.3 124.8c-.3-.8-8.8-19.6-27.6-38.5C194.6 61.3 162.9 48 128 48S61.4 61.3 36.3 86.3C17.5 105.2 9 124 8.7 124.8a7.9 7.9 0 0 0 0 6.4c.3.8 8.8 19.6 27.6 38.5 25.1 25 56.8 38.3 91.7 38.3s66.6-13.3 91.7-38.3c18.8-18.9 27.3-37.7 27.6-38.5a7.9 7.9 0 0 0 0-6.4ZM128 92a36 36 0 1 1-36 36 36 36 0 0 1 36-36Z" />
    </Svg>
  )
}
