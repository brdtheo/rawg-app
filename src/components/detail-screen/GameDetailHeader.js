import React from 'react'
import { View, Text } from 'react-native'
import moment from 'moment'
import { getIcon } from '../../utilities/Utils'
import {
  useFonts,
  Poppins_400Regular,
  Poppins_700Bold,
} from '@expo-google-fonts/poppins'
import { tailwind } from '../../../tailwind'

const GameDetailHeader = ({ name, releaseDate, platforms }) => {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_700Bold,
  })

  return (
    <>
      {fontsLoaded ? (
        <View>
          <View style={tailwind('mx-4 flex-row w-full items-center')}>
            {releaseDate ? (
              <View style={tailwind('bg-white rounded px-2 py-1 mr-2')}>
                <Text
                  style={{
                    ...tailwind('text-main-grey tracking-widest text-xs'),
                    fontFamily: 'Poppins_400Regular',
                  }}
                >
                  {moment(releaseDate).format('MMM D, YYYY')}
                </Text>
              </View>
            ) : null}
            <View style={tailwind('flex-row items-center')}>
              {platforms.map((platform, index) => (
                <View key={index.toString()} style={tailwind('justify-center')}>
                  {getIcon(platform.platform.name)}
                </View>
              ))}
            </View>
          </View>

          <Text
            style={{
              ...tailwind('mx-4 text-white text-3xl mb-2 w-full pt-3 pb-4'),
              fontFamily: 'Poppins_700Bold',
            }}
          >
            {name}
          </Text>
        </View>
      ) : null}
    </>
  )
}

export default GameDetailHeader
