import React from 'react'
import Svg, { Path } from 'react-native-svg'
import { View } from 'react-native'
import { tailwind } from '../../../tailwind'

const GenreIcon = ({ size }) => {
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
          d="M16.879 4.198c-.655-1.222-1.56-2.195-2.689-2.894C12.79.44 11.044 0 9 0 6.956 0 5.21.439 3.81 1.305c-1.13.698-2.034 1.672-2.688 2.893C.032 6.234 0 8.27 0 8.494v10.917c0 .084 0 .16.002.215.013.347.25.374.321.374.143 0 .222-.07.45-.293l.013-.012 2.148-2.677 2.144 2.655.024.026c.168.165.473.284.723.284h.21c.25 0 .555-.12.724-.284l.013-.013 2.154-2.671 2.144 2.656.025.027c.169.165.473.285.723.285h.21c.25 0 .555-.12.724-.284l.013-.013 2.154-2.671 2.144 2.664.024.027c.09.088.322.293.517.293.244 0 .396-.225.396-.589V8.494c0-.225-.031-2.26-1.121-4.296zM5.472 10.202c-1.106 0-2.002-.875-2.002-1.954 0-1.08.896-1.954 2.002-1.954 1.106 0 2.002.875 2.002 1.954s-.896 1.954-2.002 1.954zm7.004 0c-1.106 0-2.003-.875-2.003-1.954 0-1.08.897-1.954 2.003-1.954 1.105 0 2.002.875 2.002 1.954s-.897 1.954-2.002 1.954z"
        />
      </Svg>
    </View>
  )
}

export default GenreIcon