import Svg, { SvgProps, Path, Defs, G, ClipPath } from 'react-native-svg'

export function CheckCircleFill(props: SvgProps) {
  return (
    <Svg width={20} height={20} fill="none" {...props}>
      <G clipPath="url(#a)">
        <Path
          d="M10 1.875A8.125 8.125 0 1 0 18.125 10 8.14 8.14 0 0 0 10 1.875Zm3.867 6.703L9.29 12.953a.633.633 0 0 1-.867 0l-2.29-2.187a.625.625 0 1 1 .86-.907l1.86 1.774 4.156-3.961a.625.625 0 0 1 .86.906Z"
          fill="#46A758"
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
