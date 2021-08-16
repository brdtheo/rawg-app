import React from 'react'
import Svg, { Path } from 'react-native-svg'
import { View } from 'react-native'
import { tailwind } from '../../../tailwind'

const PublisherIcon = ({ size }) => {
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
        viewBox="0 0 18 20"
      >
        <Path
          fill="#FFF"
          d="M0 16.843V3.159L12.57 0v20L0 16.843zm15.02-14.32h2.822v15.675H15.02V2.524z"
        />
      </Svg>
    </View>
  )
}

export default PublisherIcon
