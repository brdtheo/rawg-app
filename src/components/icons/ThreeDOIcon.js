import React from 'react'
import { View } from 'react-native'
import Svg, { Path, G, Rect, Ellipse } from 'react-native-svg'
import { tailwind } from '../../../tailwind'

const ThreeDOIcon = ({ size }) => {
  return (
    <View
      style={{
        ...tailwind('flex self-center mr-1'),
        width: size,
        height: size,
      }}
    >
      <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8 20">
        <G fill="#FFF" fill-rule="evenodd">
          <Rect width="7.579" height="5.361" x=".211" y="8.041" rx="2.265" />
          <Path d="M3.96.087l3.87 3.87-3.79 3.791-3.87-3.87z" />
          <Ellipse cx="4.105" cy="16.907" rx="3.263" ry="3.093" />
        </G>
      </Svg>
    </View>
  )
}

export default ThreeDOIcon
