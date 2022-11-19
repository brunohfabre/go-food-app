import Svg, { SvgProps, Path, Circle } from 'react-native-svg'

import { colors } from '../../styles/colors'

type UserRegularProps = { color?: string } & SvgProps

export function UserRegular({ color, ...rest }: UserRegularProps) {
  return (
    <Svg width={20} height={20} viewBox="0 0 256 256" {...rest}>
      <Path fill="none" d="M0 0h256v256H0z" />
      <Circle
        cx={128}
        cy={96}
        r={64}
        fill="none"
        stroke={color ?? colors.gray9}
        strokeMiterlimit={10}
        strokeWidth={16}
      />
      <Path
        d="M31 216a112 112 0 0 1 194 0"
        fill="none"
        stroke={color ?? colors.gray9}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={16}
      />
    </Svg>
  )
}
