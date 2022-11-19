import Svg, { SvgProps, Path } from 'react-native-svg'

import { colors } from '../../styles/colors'

export function ReceiptFill(props: SvgProps) {
  return (
    <Svg
      width={20}
      height={20}
      viewBox="0 0 256 256"
      fill={colors.secondary}
      {...props}
    >
      <Path fill="none" d="M0 0h256v256H0z" />
      <Path d="M216 40H40a16 16 0 0 0-16 16v152a7.9 7.9 0 0 0 3.8 6.8 8 8 0 0 0 7.8.4L64 200.9l28.4 14.3a8.3 8.3 0 0 0 7.2 0l28.4-14.3 28.4 14.3a8.5 8.5 0 0 0 7.2 0l28.4-14.3 28.4 14.3a8 8 0 0 0 7.8-.4 7.9 7.9 0 0 0 3.8-6.8V56a16 16 0 0 0-16-16Zm-36 104H76a8 8 0 0 1 0-16h104a8 8 0 0 1 0 16Zm0-32H76a8 8 0 0 1 0-16h104a8 8 0 0 1 0 16Z" />
    </Svg>
  )
}
