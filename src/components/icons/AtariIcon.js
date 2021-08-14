import React from 'react'
import { View } from 'react-native'
import Svg, { Path } from 'react-native-svg'
import { tailwind } from '../../../tailwind'

const AtariIcon = ({ size }) => {
  return (
    <View
      style={{
        ...tailwind('flex self-center mr-1'),
        width: size,
        height: size,
      }}
    >
      <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 16">
        <Path
          d="M11.042 16V0H8.75v16h2.292zM7.102 0h1.231c0 7.417-.19 9.224-1.325 11.412C5.87 13.599 2.698 15.762 0 16v-2.445c2.036-.333 3.883-1.43 5.492-3.855C7.102 7.275 7.15 1.52 7.102 0zm5.796 0h-1.231c0 7.417.19 9.224 1.325 11.412C14.13 13.599 17.302 15.762 20 16v-2.445c-2.036-.333-3.883-1.43-5.492-3.855-1.61-2.425-1.658-8.179-1.61-9.7z"
          fill="#FFF"
        />
      </Svg>
    </View>
  )
}

export default AtariIcon
