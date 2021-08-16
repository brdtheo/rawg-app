import React from 'react'
import Svg, { Path } from 'react-native-svg'
import { View } from 'react-native'
import { tailwind } from '../../../tailwind'

const DeveloperIcon = ({ size }) => {
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
        viewBox="0 0 22 16"
      >
        <Path
          d="M13.288.224l-.722-.197a.326.326 0 00-.274.029.378.378 0 00-.18.227L7.767 15.289a.348.348 0 00.029.285c.05.089.126.149.227.18l.722.197a.325.325 0 00.274-.029.374.374 0 00.18-.226L13.544.69a.348.348 0 00-.03-.285.378.378 0 00-.226-.18zm-6.51 2.93c0-.1-.039-.19-.116-.268l-.583-.58a.369.369 0 00-.536 0L.116 7.721a.367.367 0 000 .534l5.427 5.417a.368.368 0 00.536 0l.582-.58a.367.367 0 000-.535L2.085 7.988 6.662 3.42a.367.367 0 00.116-.267zm14.417 4.568l-5.427-5.417a.369.369 0 00-.268-.116.37.37 0 00-.268.116l-.582.581a.367.367 0 000 .535l4.577 4.568-4.577 4.568a.367.367 0 000 .535l.582.581a.369.369 0 00.536 0l5.427-5.417a.367.367 0 000-.534z"
          fill="#FFF"
        />
      </Svg>
    </View>
  )
}

export default DeveloperIcon
