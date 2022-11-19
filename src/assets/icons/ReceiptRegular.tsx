import Svg, { SvgProps, Path } from 'react-native-svg'

import { colors } from '../../styles/colors'

export function ReceiptRegular(props: SvgProps) {
  return (
    <Svg width={20} height={20} viewBox="0 0 256 256" {...props}>
      <Path fill="none" d="M0 0h256v256H0z" />
      <Path
        fill="none"
        stroke={colors.gray9}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={16}
        d="M76 104h104M76 136h104M32 208V56a8 8 0 0 1 8-8h176a8 8 0 0 1 8 8v152l-32-16-32 16-32-16-32 16-32-16Z"
      />
    </Svg>
  )
}
