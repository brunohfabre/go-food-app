import Svg, { SvgProps, Path, Defs, ClipPath, G } from 'react-native-svg'

export function SignOutRegular(props: SvgProps) {
  return (
    <Svg width={20} height={20} fill="none" {...props}>
      <G clipPath="url(#a)">
        <Path
          d="m17.32 10.445-3.28 3.282a.649.649 0 0 1-.446.18.625.625 0 0 1-.625-.625v-2.657H8.125a.625.625 0 1 1 0-1.25h4.844V6.719a.624.624 0 0 1 .75-.612c.12.024.231.081.32.166l3.281 3.282a.633.633 0 0 1 0 .89ZM8.125 16.25H3.75V3.75h4.375a.625.625 0 0 0 0-1.25H3.75A1.25 1.25 0 0 0 2.5 3.75v12.5a1.25 1.25 0 0 0 1.25 1.25h4.375a.625.625 0 1 0 0-1.25Z"
          fill="#E5484D"
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
