import React from 'react'
import Svg, { Path, G, Defs, ClipPath } from 'react-native-svg'

const SvgComponent = props => (
  <Svg width={60} height={60} fill="none" {...props}>
    <Path fill="#fff" d="M0 0h60v60H0z" />
    <G clipPath="url(#prefix__clip0)">
      <Path
        opacity={0.99}
        d="M32.927 21.24h-9.94a3.29 3.29 0 0 0-3.29 3.29v9.997a3.29 3.29 0 0 0 3.29 3.29h9.94a3.29 3.29 0 0 0 3.29-3.29v-9.998a3.29 3.29 0 0 0-3.29-3.289z"
        fill="#2379FF"
      />
      <Path
        opacity={0.99}
        d="M16.49 24.76a4.4 4.4 0 0 0 0 8.799h21.712v2.69a4.398 4.398 0 0 0 7.535 3.157A4.398 4.398 0 0 0 47 36.248v-3.48c0-4.36-3.646-8.008-8.006-8.008H16.489zM32.985 12.491H22.557a3.16 3.16 0 0 0 0 6.32h10.428a3.16 3.16 0 1 0 0-6.32z"
        fill="#257AFF"
      />
      <Path
        opacity={0.99}
        d="M27.73 15.078a2.678 2.678 0 0 0-2.637 2.716v5a2.678 2.678 0 1 0 5.356 0v-5a2.679 2.679 0 0 0-2.718-2.716z"
        fill="#277BFF"
      />
      <Path
        opacity={0.99}
        d="M46.73 48.62a3.31 3.31 0 0 1-6.62 0c0-1.828 1.483-5.834 3.31-5.834 1.828 0 3.31 4.006 3.31 5.834z"
        fill="#257AFF"
      />
    </G>
    <Defs>
      <ClipPath id="prefix__clip0">
        <Path
          fill="#fff"
          transform="translate(12.09 12.491)"
          d="M0 0h34.91v39.439H0z"
        />
      </ClipPath>
    </Defs>
  </Svg>
)

export default SvgComponent
