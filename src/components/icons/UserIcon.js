import React from 'react'
import { View } from 'react-native'
import Svg, { Path } from 'react-native-svg'
import { tailwind } from '../../../tailwind'

const UserIcon = ({ size }) => {
  return (
    <View
      style={{
        ...tailwind('flex-row items-center justify-end'),
        width: size,
        height: size,
      }}
    >
      <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 15">
        <Path
          d="M6 1C4.346 1 3 2.346 3 4s1.346 3 3 3 3-1.346 3-3-1.346-3-3-3zm3.733 9.373C8.91 9.487 7.823 9 6.667 9H5.333c-1.155 0-2.244.487-3.066 1.373A4.79 4.79 0 001 13.646c0 .196.15.354.333.354h9.334c.184 0 .333-.158.333-.354a4.79 4.79 0 00-1.267-3.273z"
          fill="none"
          stroke="#ffffff66"
        />
      </Svg>
    </View>
  )
}

export default UserIcon
