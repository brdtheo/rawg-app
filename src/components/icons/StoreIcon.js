import React from 'react'
import Svg, { Path } from 'react-native-svg'
import { View } from 'react-native'
import { tailwind } from '../../../tailwind'

const StoreIcon = ({ size }) => {
  return (
    <View
      style={{
        ...tailwind('flex self-center'),
        width: size,
        height: size,
      }}
    >
      <Svg
        class="SVGInline-svg discover-sidebar__icon-svg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 16 20"
      >
        <Path
          fill="#FFF"
          d="M15.966 7.05h-4.558V0H4.57v7.05H.01l7.978 8.226 7.977-8.225zM.011 17.628v2.35h15.955v-2.35H.011z"
        />
      </Svg>
    </View>
  )
}

export default StoreIcon
