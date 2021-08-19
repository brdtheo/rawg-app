import React from 'react'
import { Text, TouchableOpacity, View, ImageBackground } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { tailwind } from '../../tailwind'
import {
  useFonts,
  Poppins_700Bold,
  Poppins_500Medium,
} from '@expo-google-fonts/poppins'
import UserIcon from './icons/UserIcon'
import { formatNumber } from '../utilities/Utils'

const CategoryCard = ({ name, image, games, gamesCount, placeholder }) => {
  const [fontsLoaded] = useFonts({
    Poppins_700Bold,
    Poppins_500Medium,
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
              {placeholder ? (
                <View
                  style={tailwind('flex-1 justify-center items-center px-6')}
                >
                  <View
                    style={tailwind('w-28 rounded h-8 rounded bg-gray-200')}
                  />
                </View>
              ) : (
                <View
                  style={tailwind('flex-1 justify-center items-center px-6')}
                >
                  <Text
                    style={{
                      ...tailwind('text-white underline text-xl text-center'),
                      fontFamily: 'Poppins_700Bold',
                    }}
                  >
                    {name}
                  </Text>
                </View>
              )}
              {placeholder ? (
                <View style={tailwind('py-4 px-6')}>
                  <View
                    style={tailwind(
                      'w-full flex-row items-end justify-between'
                    )}
                  >
                    <View style={tailwind('w-24 rounded h-6 bg-gray-200')} />
                    <View style={tailwind('w-16 rounded h-6 bg-gray-200')} />
                  </View>
                  <View
                    style={{
                      ...tailwind('w-full border-b mt-2 mb-4'),
                      borderColor: 'rgba(255,255,255,.2)',
                    }}
                  />
                  <View
                    style={tailwind(
                      'w-full flex-row items-center justify-between mb-3'
                    )}
                  >
                    <View style={tailwind('w-32 rounded h-5 bg-gray-200')} />
                    <View style={tailwind('w-20 rounded h-5 bg-gray-200')} />
                  </View>
                  <View
                    style={tailwind(
                      'w-full flex-row items-center justify-between mb-3'
                    )}
                  >
                    <View style={tailwind('w-32 rounded h-5 bg-gray-200')} />
                    <View style={tailwind('w-20 rounded h-5 bg-gray-200')} />
                  </View>
                  <View
                    style={tailwind(
                      'w-full flex-row items-center justify-between mb-3'
                    )}
                  >
                    <View style={tailwind('w-32 rounded h-5 bg-gray-200')} />
                    <View style={tailwind('w-20 rounded h-5 bg-gray-200')} />
                  </View>
                </View>
              ) : (
                <View style={tailwind('py-4 px-6')}>
                  <View
                    style={tailwind(
                      'w-full flex-row items-end justify-between'
                    )}
                  >
                    <Text
                      style={{
                        ...tailwind('text-white text-base'),
                        fontFamily: 'Poppins_700Bold',
                      }}
                    >
                      Popular items
                    </Text>
                    <Text
                      style={{
                        ...tailwind('text-sm'),
                        color: 'rgba(255,255,255,.4)',
                      }}
                    >
                      {formatNumber(gamesCount)}
                    </Text>
                  </View>

                  <View
                    style={{
                      ...tailwind('w-full border-b mt-2 mb-4'),
                      borderColor: 'rgba(255,255,255,.2)',
                    }}
                  />

                  {games
                    ? games.slice(0, 3).map((game, index) => (
                        <View
                          style={tailwind(
                            'w-full flex-row items-center justify-between mb-3'
                          )}
                          key={index.toString()}
                        >
                          <Text
                            numberOfLines={1}
                            style={tailwind(
                              'underline text-white text-sm flex-1 mr-6'
                            )}
                          >
                            {game.name}
                          </Text>
                          <View
                            style={tailwind(
                              'justify-end items-center flex-row'
                            )}
                          >
                            <Text
                              style={{
                                ...tailwind('text-sm mr-1'),
                                color: 'rgba(255,255,255,.4)',
                                fontFamily: 'Poppins_500Medium',
                              }}
                            >
                              {formatNumber(game.added)}
                            </Text>
                            <UserIcon size={14} />
                          </View>
                        </View>
                      ))
                    : null}
                </View>
              )}
            </LinearGradient>
          </ImageBackground>
        </TouchableOpacity>
      ) : null}
    </>
  )
}

export default React.memo(CategoryCard)
