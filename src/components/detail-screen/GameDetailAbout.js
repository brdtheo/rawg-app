import React from 'react'
import { View, Text } from 'react-native'
import {
  useFonts,
  Poppins_400Regular,
  Poppins_700Bold,
} from '@expo-google-fonts/poppins'
import { tailwind } from '../../../tailwind'

const GameDetailAbout = ({ description }) => {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_700Bold,
  })

  return (
    <>
      {fontsLoaded ? (
        <View style={tailwind('mx-4 mb-6')}>
          <Text
            style={{
              ...tailwind('text-lg text-white mb-1.5'),
              fontFamily: 'Poppins_700Bold',
            }}
          >
            About
          </Text>

          <Text
            style={{
              ...tailwind('text-white leading-5'),
              fontFamily: 'Poppins_400Regular',
            }}
          >
            {description}
          </Text>
        </View>
      ) : null}
    </>
  )
}

export default GameDetailAbout
