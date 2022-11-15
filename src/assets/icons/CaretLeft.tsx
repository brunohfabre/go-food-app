import Svg, { SvgProps, G, Path, Defs, ClipPath } from 'react-native-svg'

export function CaretLeft(props: SvgProps) {
  return (
    <Svg width={20} height={20} fill="none" {...props}>
      <G clipPath="url(#a)">
        <Path
          d="M12.5 16.25 6.25 10l6.25-6.25"
          stroke="#1A1523"
          strokeWidth={1.875}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </G>
      <Defs>
        <ClipPath id="a">
          <Path fill="#fff" d="M0 0h20v20H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}
