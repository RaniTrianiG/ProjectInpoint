import React from 'react'
import Svg, { Path } from 'react-native-svg'

const SvgComponent = props => (
  <Svg width={32} height={31} fill="none" {...props}>
    <Path
      opacity={0.99}
      d="M29.615 0H2.162C1.028 0 .108.92.108 2.054v23.091c0 1.135.92 2.054 2.054 2.054h27.453c1.134 0 2.054-.92 2.054-2.054V2.054C31.669.919 30.748 0 29.615 0z"
      fill="#FF8600"
    />
    <Path
      opacity={0.99}
      d="M28.143 3.605h-24.8v18.346h24.8V3.605z"
      fill="#fff"
    />
    <Path
      opacity={0.99}
      d="M8.137 10.774a10.888 10.888 0 0 1 7.751-3.253c2.907 0 5.696 1.17 7.751 3.253M11.84 14.527a5.72 5.72 0 0 1 1.858-1.257 5.66 5.66 0 0 1 4.38 0 5.721 5.721 0 0 1 1.858 1.257"
      stroke="#FF8702"
      strokeWidth={0.297}
    />
    <Path
      opacity={0.99}
      d="M15.889 16.436c-.71 0-1.42.271-1.952.81l1.952 1.976 1.95-1.976a2.73 2.73 0 0 0-1.95-.81zM23.419 26.475H8.359v2.738h15.06v-2.738z"
      fill="#FF8702"
    />
    <Path
      opacity={0.99}
      d="M28.758 28.94H3.018V31h25.74v-2.06z"
      fill="#FF8702"
    />
  </Svg>
)

export default SvgComponent
