import React from 'react'
import Svg, { Path, G } from 'react-native-svg'
import { View } from 'react-native'
import { tailwind } from '../../../tailwind'

const CreatorIcon = ({ size }) => {
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
        viewBox="0 0 17 20"
      >
        <G fill="none">
          <Path
            fill="#FFF"
            d="M8.182 10c2.51 0 4.545-2.239 4.545-5s-1.47-5-4.545-5-4.546 2.239-4.546 5 2.036 5 4.546 5z"
          />
          <Path
            fill="#000"
            d="M.074 17.264c-.001-.194-.003-.055 0 0zm15.349.113c.003-.045 0-.312 0 0z"
          />
          <Path
            fill="#FFF"
            d="M16.354 16.994c-.08-4.797.228-4.31-4.83-5.176 0 0-1.682.86-3.342.86-1.66 0-3.341-.86-3.341-.86-5.004.856-4.736.349-4.829 5.02-.007.381-.01.401-.012.357v.504S1.206 20 8.183 20s8.181-2.3 8.181-2.3v-.374c0 .028-.003-.025-.009-.332z"
          />
        </G>
      </Svg>
    </View>
  )
}

export default CreatorIcon
