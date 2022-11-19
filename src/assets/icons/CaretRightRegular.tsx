import Svg, { SvgProps, Path } from 'react-native-svg'

import { colors } from '../../styles/colors'

export function CaretRightRegular(props: SvgProps) {
  return (
    <Svg width={16} height={16} viewBox="0 0 256 256" {...props}>
      <Path fill="none" d="M0 0h256v256H0z" />
      <Path
        fill="none"
        stroke={colors.gray9}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={16}
        d="m96 48 80 80-80 80"
      />
    </Svg>
  )
}
