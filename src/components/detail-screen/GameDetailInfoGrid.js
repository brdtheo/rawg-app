import React from 'react'
import { View, Text, TouchableOpacity, Linking } from 'react-native'
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

  const InfoGridItem = ({ title, children }) => (
    <View style={{ ...tailwind('mb-6'), width: '46%' }}>
      <Text
        style={{
          ...tailwind('text-white text-opacity-40'),
          fontFamily: 'Poppins_500Medium',
        }}
      >
        {title}
      </Text>
      <View style={tailwind('mt-2 flex-row flex-wrap')}>{children}</View>
    </View>
  )

  return (
    <>
      {fontsLoaded ? (
        <View style={tailwind('mx-4 mb-6 flex-row justify-between flex-wrap')}>
          <InfoGridItem title="Platforms">
            {platforms.map((p, index) => (
              <Text
                key={index.toString()}
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
          </InfoGridItem>

          {metacritic ? (
            <InfoGridItem title="Metascore">
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
            </InfoGridItem>
          ) : null}

          {genres ? (
            <InfoGridItem title="Genres">
              {genres.map((g, index) => (
                <Text
                  key={index.toString()}
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
            </InfoGridItem>
          ) : null}

          {releaseDate ? (
            <InfoGridItem title="Release date">
              <Text style={tailwind('text-white')}>
                {formatDate(releaseDate)}
              </Text>
            </InfoGridItem>
          ) : null}

          {updateDate ? (
            <InfoGridItem title="Updated">
              <Text style={tailwind('text-white')}>
                {formatDate(updateDate)}
              </Text>
            </InfoGridItem>
          ) : null}

          {playtime ? (
            <InfoGridItem title="Average playtime">
              <Text style={tailwind('text-white')}>
                {playtime} hour
                {playtime > 1 ? 's' : null}
              </Text>
            </InfoGridItem>
          ) : null}

          {website ? (
            <InfoGridItem title="Website">
              <TouchableOpacity onPress={() => Linking.openURL(website)}>
                <Text style={tailwind('text-white underline')}>{website}</Text>
              </TouchableOpacity>
            </InfoGridItem>
          ) : null}

          {achievementsCount ? (
            <InfoGridItem title="Achievements">
              <Text style={tailwind('text-white')}>{achievementsCount}</Text>
            </InfoGridItem>
          ) : null}

          {esrb ? (
            <InfoGridItem title="ESRB Rating">
              <Text style={tailwind('text-white')}>{esrb.name}</Text>
            </InfoGridItem>
          ) : null}
        </View>
      ) : null}
    </>
  )
}

export default GameDetailInfoGrid
