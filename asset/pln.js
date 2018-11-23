import React from 'react'
import Svg, { Path, G, Defs, ClipPath } from 'react-native-svg'

const SvgComponent = props => (
  <Svg width={60} height={60} fill="none" {...props}>
    <Path fill="#fff" d="M0 0h60v60H0z" />
    <G clipPath="url(#prefix__clip0)">
      <Path
        opacity={0.99}
        d="M29.805 38.61c7.072 0 12.805-5.733 12.805-12.805S36.877 13 29.805 13 17 18.733 17 25.805 22.733 38.61 29.805 38.61z"
        fill="#FFB800"
      />
      <Path
        opacity={0.99}
        d="M37.362 36.51H22.248a1.68 1.68 0 0 0 0 3.36h15.114a1.68 1.68 0 1 0 0-3.36zM34.528 41.676h-9.446a1.68 1.68 0 0 0 0 3.358h9.446a1.68 1.68 0 0 0 0-3.358z"
        fill="#FFB800"
      />
      <Path
        opacity={0.99}
        d="M29.805 46.902a2.047 2.047 0 1 0 0-4.093 2.047 2.047 0 0 0 0 4.093z"
        fill="#FFB800"
      />
      <G opacity={0.99}>
        <Path
          d="M31.763 18.994l-4.856 8.41h5.796l-3.572 6.185"
          fill="#FFB800"
        />
        <Path
          d="M31.763 18.994l-4.856 8.41h5.796l-3.572 6.185"
          stroke="#fff"
          strokeWidth={0.465}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </G>
    </G>
    <Defs>
      <ClipPath id="prefix__clip0">
        <Path
          fill="#fff"
          transform="translate(17 13)"
          d="M0 0h25.61v33.902H0z"
        />
      </ClipPath>
    </Defs>
  </Svg>
)

export default SvgComponent
