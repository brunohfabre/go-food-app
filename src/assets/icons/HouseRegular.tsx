import Svg, { SvgProps, Path } from 'react-native-svg'

import { colors } from '../../styles/colors'

export function HouseRegular(props: SvgProps) {
  return (
    <Svg width={20} height={20} viewBox="0 0 256 256" {...props}>
      <Path fill="none" d="M0 0h256v256H0z" />
      <Path
        d="M152 208v-48a8 8 0 0 0-8-8h-32a8 8 0 0 0-8 8v48a8 8 0 0 1-8 8H48a8 8 0 0 1-8-8v-92.5a8.3 8.3 0 0 1 2.6-5.9l80-72.7a8 8 0 0 1 10.8 0l80 72.7a8.3 8.3 0 0 1 2.6 5.9V208a8 8 0 0 1-8 8h-48a8 8 0 0 1-8-8Z"
        fill="none"
        stroke={colors.gray9}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={16}
      />
    </Svg>
  )
}
