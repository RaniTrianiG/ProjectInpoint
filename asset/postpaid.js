import React from 'react'
import Svg, { Path } from 'react-native-svg'

const SvgComponent = props => (
  <Svg width={27} height={35} fill="none" {...props}>
    <Path
      opacity={0.99}
      d="M24.05 0H2.248A2.086 2.086 0 0 0 .163 2.086v30.828c0 1.152.934 2.086 2.085 2.086H24.05a2.086 2.086 0 0 0 2.086-2.086V2.086A2.086 2.086 0 0 0 24.05 0z"
      fill="#EF3E33"
    />
    <Path
      opacity={0.99}
      d="M22.885 4.244H3.415v22.383h19.47V4.244z"
      fill="#fff"
    />
    <Path
      opacity={0.99}
      d="M13.096 33.57a2.433 2.433 0 1 0 0-4.866 2.433 2.433 0 0 0 0 4.866z"
      fill="#FFFEFD"
    />
    <Path
      opacity={0.99}
      d="M9.828 16.393a1.328 1.328 0 0 0-2.656 0v3.658a1.328 1.328 0 0 0 2.656 0v-3.658zM14.478 13.037a1.328 1.328 0 0 0-2.656 0v7.015a1.328 1.328 0 0 0 2.656 0v-7.015zM19.127 10.632a1.328 1.328 0 0 0-2.655 0v9.42a1.328 1.328 0 0 0 2.655 0v-9.42z"
      fill="#EF4035"
    />
  </Svg>
)

export default SvgComponent
