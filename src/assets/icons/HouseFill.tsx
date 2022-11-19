import Svg, { SvgProps, Path } from 'react-native-svg'

import { colors } from '../../styles/colors'

export function HouseFill(props: SvgProps) {
  return (
    <Svg
      width={20}
      height={20}
      viewBox="0 0 256 256"
      fill={colors.secondary}
      {...props}
    >
      <Path fill="none" d="M0 0h256v256H0z" />
      <Path d="m218.8 103.7-80-72.7a16 16 0 0 0-21.6 0l-80 72.7a16 16 0 0 0-5.2 11.8v92.1a16.4 16.4 0 0 0 4 11 15.9 15.9 0 0 0 12 5.4h48a8 8 0 0 0 8-8v-48a8 8 0 0 1 8-8h32a8 8 0 0 1 8 8v48a8 8 0 0 0 8 8h48a15.6 15.6 0 0 0 7.6-1.9A16.1 16.1 0 0 0 224 208v-92.5a16 16 0 0 0-5.2-11.8Z" />
    </Svg>
  )
}
