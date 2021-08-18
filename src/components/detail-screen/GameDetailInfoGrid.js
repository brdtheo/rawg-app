import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold,
} from '@expo-google-fonts/poppins'
import { tailwind } from '../../../tailwind'
import { getScoreColor, formatDate } from '../../utilities/Utils'

const GameDetailInfoGrid = ({
  platforms,
  metacritic,
  genres,
  releaseDate,
  updateDate,
  playtime,
  website,
  achievementsCount,
  esrb,
}) => {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold,
  })

  return (
    <>
      {fontsLoaded ? (
        <View style={tailwind('mx-4 mb-6 flex-row justify-between flex-wrap')}>
          <View style={{ ...tailwind('mb-6'), width: '46%' }}>
            <Text
              style={{
                ...tailwind('text-white text-opacity-40'),
                fontFamily: 'Poppins_500Medium',
              }}
            >
              Platforms
            </Text>
            <View style={tailwind('mt-2 flex-row flex-wrap')}>
              {platforms.map((p, index) => (
                <Text
                  style={{
                    ...tailwind('text-white underline'),
                    marginRight: index === platforms.length - 1 ? 0 : 5,
                    marginBottom: index === platforms.length - 1 ? 0 : 5,
                  }}
                >
                  {p.platform.name}
                  {index === platforms.length - 1 ? '' : ','}
                </Text>
              ))}
            </View>
          </View>

          {metacritic ? (
            <View style={{ ...tailwind('mb-6'), width: '46%' }}>
              <Text
                style={{
                  ...tailwind('text-white text-opacity-40'),
                  fontFamily: 'Poppins_500Medium',
                }}
              >
                Metascore
              </Text>
              <View style={tailwind('mt-2 flex-row flex-wrap')}>
                <View
                  style={{
                    ...tailwind('flex px-1 border rounded'),
                    borderColor: getScoreColor(metacritic),
                  }}
                >
                  <Text
                    style={{
                      color: getScoreColor(metacritic),
                      fontFamily: 'Poppins_700Bold',
                    }}
                  >
                    {metacritic}
                  </Text>
                </View>
              </View>
            </View>
          ) : null}

          {genres ? (
            <View style={{ ...tailwind('mb-6'), width: '46%' }}>
              <Text
                style={{
                  ...tailwind('text-white text-opacity-40'),
                  fontFamily: 'Poppins_500Medium',
                }}
              >
                Genres
              </Text>
              <View style={tailwind('mt-2 flex-row flex-wrap')}>
                {genres.map((g, index) => (
                  <Text
                    style={{
                      ...tailwind('text-white underline'),
                      marginRight: index === genres.length - 1 ? 0 : 5,
                      marginBottom: index === genres.length - 1 ? 0 : 5,
                    }}
                  >
                    {g.name}
                    {index === genres.length - 1 ? '' : ','}
                  </Text>
                ))}
              </View>
            </View>
          ) : null}

          {releaseDate ? (
            <View style={{ ...tailwind('mb-6'), width: '46%' }}>
              <Text
                style={{
                  ...tailwind('text-white text-opacity-40'),
                  fontFamily: 'Poppins_500Medium',
                }}
              >
                Release date
              </Text>
              <View style={tailwind('mt-2 flex-row flex-wrap')}>
                <Text style={tailwind('text-white')}>
                  {formatDate(releaseDate)}
                </Text>
              </View>
            </View>
          ) : null}

          {updateDate ? (
            <View style={{ ...tailwind('mb-6'), width: '46%' }}>
              <Text
                style={{
                  ...tailwind('text-white text-opacity-40'),
                  fontFamily: 'Poppins_500Medium',
                }}
              >
                Updated
              </Text>
              <View style={tailwind('mt-2 flex-row flex-wrap')}>
                <Text style={tailwind('text-white')}>
                  {formatDate(updateDate)}
                </Text>
              </View>
            </View>
          ) : null}

          {playtime ? (
            <View style={{ ...tailwind('mb-6'), width: '46%' }}>
              <Text
                style={{
                  ...tailwind('text-white text-opacity-40'),
                  fontFamily: 'Poppins_500Medium',
                }}
              >
                Average playtime
              </Text>
              <View style={tailwind('mt-2 flex-row flex-wrap')}>
                <Text style={tailwind('text-white')}>
                  {playtime} hour
                  {playtime > 1 ? 's' : null}
                </Text>
              </View>
            </View>
          ) : null}

          {website ? (
            <View style={{ ...tailwind('mb-6'), width: '46%' }}>
              <Text
                style={{
                  ...tailwind('text-white text-opacity-40'),
                  fontFamily: 'Poppins_500Medium',
                }}
              >
                Website
              </Text>
              <View style={tailwind('mt-2 flex-row flex-wrap')}>
                <TouchableOpacity onPress={() => Linking.openURL(website)}>
                  <Text style={tailwind('text-white underline')}>
                    {website}
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          ) : null}

          {achievementsCount ? (
            <View style={{ ...tailwind('mb-6'), width: '46%' }}>
              <Text
                style={{
                  ...tailwind('text-white text-opacity-40'),
                  fontFamily: 'Poppins_500Medium',
                }}
              >
                Achievements
              </Text>
              <View style={tailwind('mt-2 flex-row flex-wrap')}>
                <Text style={tailwind('text-white')}>{achievementsCount}</Text>
              </View>
            </View>
          ) : null}

          {esrb ? (
            <View style={{ ...tailwind('mb-6'), width: '46%' }}>
              <Text
                style={{
                  ...tailwind('text-white text-opacity-40'),
                  fontFamily: 'Poppins_500Medium',
                }}
              >
                ESRB Rating
              </Text>
              <View style={tailwind('mt-2 flex-row flex-wrap')}>
                <Text style={tailwind('text-white')}>{esrb.name}</Text>
              </View>
            </View>
          ) : null}
        </View>
      ) : null}
    </>
  )
}

export default GameDetailInfoGrid
