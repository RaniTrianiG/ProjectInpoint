import React from 'react'
import Svg, { Path } from 'react-native-svg'

const BPJS = props => (
  <Svg width={100} height={100} fill="none" {...props}>
    <Path
      opacity={0.99}
      d="M32.1 8.559H4.153a3.606 3.606 0 0 0-3.607 3.606v16.229A3.606 3.606 0 0 0 4.152 32H32.1a3.606 3.606 0 0 0 3.606-3.607V12.165a3.606 3.606 0 0 0-3.606-3.606z"
      fill="#00C621"
    />
    <Path
      opacity={0.99}
      d="M23.386 6.948a5.26 5.26 0 1 0-10.52 0v2.554a5.26 5.26 0 0 0 10.52 0V6.948z"
      stroke="#02C623"
      strokeWidth={0.432}
    />
    <Path
      opacity={0.99}
      d="M18.127 16.208v9.194M13.53 20.805h9.193"
      stroke="#fff"
      strokeWidth={0.648}
      strokeLinecap="square"
      strokeLinejoin="round"
    />
  </Svg>
)

export default BPJS