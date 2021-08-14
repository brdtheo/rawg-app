import React from 'react'
import { View } from 'react-native'
import Svg, { Path } from 'react-native-svg'
import { tailwind } from '../../../tailwind'

const WindowsIcon = ({ size }) => {
  return (
    <View
      style={{
        ...tailwind('flex self-center mr-1'),
        width: size,
        height: size,
      }}
    >
      <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
        <Path
          d="M0 13.772l6.545.902V8.426H0zM0 7.62h6.545V1.296L0 2.198zm7.265 7.15l8.704 1.2V8.425H7.265zm0-13.57v6.42h8.704V0z"
          fill="#FFF"
        />
      </Svg>
    </View>
  )
}

export default WindowsIcon
