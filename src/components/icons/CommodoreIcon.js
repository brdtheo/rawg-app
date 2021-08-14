import React from 'react'
import { View } from 'react-native'
import Svg, { Path, G } from 'react-native-svg'
import { tailwind } from '../../../tailwind'

const CommodoreIcon = ({ size }) => {
  return (
    <View
      style={{
        ...tailwind('flex self-center mr-1'),
        width: size,
        height: size,
      }}
    >
      <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 23 16">
        <G fill="#FFF">
          <Path d="M3.673 7.498h2.993l5.629 8.413H9.329z" />
          <Path d="M19.932.048h2.965L12.326 15.911H9.497zM.003 7.498h3.019l5.677 8.413H5.71z" />
          <Path d="M16.401.048h2.991L8.73 15.911H5.878z" />
        </G>
      </Svg>
    </View>
  )
}

export default CommodoreIcon
