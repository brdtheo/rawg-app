import React from 'react'
import Svg, { Path } from 'react-native-svg'
import { View } from 'react-native'
import { tailwind } from '../../../tailwind'

const ReviewIcon = ({ size }) => {
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
        viewBox="0 0 21 18"
        xmlns="http://www.w3.org/2000/svg"
      >
        <Path
          d="M10.5 0C4.7 0 0 3.62 0 8.086c0 2.19 1.132 4.18 2.97 5.635-.106 1.485-.463 3.3-1.497 4.279 2.058 0 4.161-1.29 5.49-2.3 1.106.304 2.295.471 3.537.471 5.8 0 10.5-3.617 10.5-8.085C21 3.619 16.3 0 10.5 0z"
          fill="#FFF"
        />
      </Svg>
    </View>
  )
}

export default ReviewIcon
