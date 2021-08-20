import React from 'react'
import { Text, TouchableOpacity, View, ImageBackground } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { tailwind } from '../../tailwind'
import {
  useFonts,
  Poppins_700Bold,
  Poppins_400Regular,
} from '@expo-google-fonts/poppins'
import UserIcon from './icons/UserIcon'
import { formatNumber } from '../utilities/Utils'

const CollectionCard = ({
  name,
  image,
  author,
  gamesCount,
  covers,
  likesCount,
  placeholder,
}) => {
  const [fontsLoaded] = useFonts({
    Poppins_700Bold,
    Poppins_400Regular,
  })

  return (
    <>
      {fontsLoaded ? (
        <TouchableOpacity
          style={{
            ...tailwind('rounded bg-card-grey w-full h-72'),
            shadowColor: '#202020',
            shadowOpacity: 0.07,
            shadowOffset: {
              width: 0,
              height: 8,
            },
            shadowRadius: 4,
            elevation: 2,
            overflow: 'hidden',
          }}
        >
          <ImageBackground
            source={{ uri: image }}
            style={tailwind('w-full h-full')}
          >
            <LinearGradient
              end={{ x: 0.5, y: 0.55 }}
              colors={['rgba(32,32,32,0.5)', '#202020']}
              style={tailwind('w-full h-full')}
            >
              <View style={tailwind('p-6 flex-1')}>
                <View style={tailwind('flex-1 justify-center items-center')}>
                  {placeholder ? (
                    <View
                      style={tailwind('w-48 rounded h-8 rounded bg-gray-200 mb-2')}
                    />
                  ) : (
                    <Text
                      style={{
                        ...tailwind(
                          'text-white underline text-xl text-center mb-2'
                        ),
                        fontFamily: 'Poppins_700Bold',
                      }}
                    >
                      {name}
                    </Text>
                  )}
                  {placeholder ? (
                    <View
                      style={tailwind('w-24 rounded h-6 rounded bg-gray-200')}
                    />
                  ) : (
                    <View style={tailwind('flex-row')}>
                      <Text
                        style={{
                          ...tailwind('text-xs text-white'),
                          fontFamily: 'Poppins_400Regular',
                        }}
                      >
                        {`Collection `}
                      </Text>
                      <Text
                        style={{
                          ...tailwind('text-xs text-white text-opacity-40'),
                          fontFamily: 'Poppins_400Regular',
                        }}
                      >
                        by:
                      </Text>
                      <Text
                        style={{
                          ...tailwind('text-xs text-white'),
                          fontFamily: 'Poppins_400Regular',
                        }}
                      >
                        {` ${author}`}
                      </Text>
                    </View>
                  )}
                </View>

                {placeholder ? (
                  <View
                    style={tailwind('w-48 rounded h-12 rounded bg-gray-200 self-center mb-2')}
                  />
                ) : (
                  <View style={tailwind('flex-row justify-center py-6')}>
                    <View style={tailwind('px-4')}>
                      <Text
                        style={{
                          ...tailwind('text-base text-white'),
                          fontFamily: 'Poppins_400Regular',
                        }}
                      >
                        {gamesCount}
                      </Text>
                      <Text
                        style={{
                          ...tailwind('text-xs text-white text-opacity-40'),
                          fontFamily: 'Poppins_400Regular',
                        }}
                      >
                        games
                      </Text>
                    </View>
                    <View
                      style={tailwind(
                        'px-4 border-r border-l border-white border-opacity-40'
                      )}
                    >
                      <Text
                        style={{
                          ...tailwind('text-base text-white'),
                          fontFamily: 'Poppins_400Regular',
                        }}
                      >
                        {likesCount}
                      </Text>
                      <Text
                        style={{
                          ...tailwind('text-xs text-white text-opacity-40'),
                          fontFamily: 'Poppins_400Regular',
                        }}
                      >
                        cakes
                      </Text>
                    </View>
                    <View style={tailwind('px-4')}>
                      <Text
                        style={{
                          ...tailwind('text-base text-white'),
                          fontFamily: 'Poppins_400Regular',
                        }}
                      >
                        0
                      </Text>
                      <Text
                        style={{
                          ...tailwind('text-xs text-white text-opacity-40'),
                          fontFamily: 'Poppins_400Regular',
                        }}
                      >
                        followers
                      </Text>
                    </View>
                  </View>
                )}

                {placeholder ? (
                  <View
                    style={tailwind('w-full rounded h-20 rounded bg-gray-200')}
                  />
                ) : (
                  <View style={tailwind('flex-row justify-between mt-4 h-16')}>
                    {covers[1] ? (
                      <View
                        style={tailwind(
                          'w-1/3 h-12 self-end rounded overflow-hidden'
                        )}
                      >
                        <ImageBackground
                          source={{ uri: covers[1].url }}
                          style={tailwind('w-full h-full')}
                        />
                      </View>
                    ) : null}
                    <View
                      style={tailwind(
                        'w-2/4 z-10 h-16 bottom-0 rounded overflow-hidden absolute left-1/4'
                      )}
                    >
                      <ImageBackground
                        source={{ uri: covers[0].url }}
                        style={tailwind('w-full h-full')}
                      />
                    </View>
                    {covers[2] ? (
                      <View
                        style={tailwind(
                          'w-1/3 h-12 self-end rounded overflow-hidden'
                        )}
                      >
                        <ImageBackground
                          source={{ uri: covers[2].url }}
                          style={tailwind('w-full h-full')}
                        />
                      </View>
                    ) : null}
                  </View>
                )}
              </View>
            </LinearGradient>
          </ImageBackground>
        </TouchableOpacity>
      ) : null}
    </>
  )
}

export default React.memo(CollectionCard)
