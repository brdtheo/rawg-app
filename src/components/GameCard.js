import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import { tailwind } from '../../tailwind'
import { useFonts, Poppins_700Bold } from '@expo-google-fonts/poppins'
import { useNavigation } from '@react-navigation/native'
import { getIcon, getScoreColor } from '../utilities/Utils'

const GameCard = ({
  name,
  image,
  platforms,
  score,
  truncate,
  placeholder,
  slug,
}) => {
  const [fontsLoaded] = useFonts({
    Poppins_700Bold,
  })
  const navigation = useNavigation()

  return (
    <>
      {fontsLoaded ? (
        <TouchableOpacity
          style={{
            ...tailwind('rounded-2xl bg-card-grey w-full'),
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
          onPress={() => navigation.navigate('Detail', { slug: slug })}
        >
          {image ? (
            <Image
              style={tailwind('w-full h-36')}
              source={{
                uri: image,
              }}
            />
          ) : null}
          {placeholder ? (
            <View style={tailwind('w-full h-36 bg-gray-200')} />
          ) : null}
          <View style={tailwind('p-4 w-full')}>
            {placeholder ? (
              <View
                style={tailwind(
                  'w-full flex flex-row justify-between items-center mb-2'
                )}
              >
                <View style={tailwind('rounded bg-gray-200 w-24 h-6')} />
                <View style={tailwind('rounded bg-gray-200 w-12 h-6')} />
              </View>
            ) : (
              <View
                style={tailwind(
                  'w-full flex flex-row justify-between items-center mb-2'
                )}
              >
                {platforms ? (
                  <View style={tailwind('flex flex-row')}>
                    {platforms.map((platform, index) => (
                      <View key={index.toString()} style={tailwind('justify-center')}>
                        {getIcon(platform.platform.name)}
                      </View>
                    ))}
                  </View>
                ) : null}
                {score ? (
                  <View
                    style={{
                      ...tailwind('flex px-1 border rounded'),
                      borderColor: getScoreColor(score),
                    }}
                  >
                    <Text
                      style={{
                        color: getScoreColor(score),
                        fontFamily: 'Poppins_700Bold',
                      }}
                    >
                      {score}
                    </Text>
                  </View>
                ) : null}
              </View>
            )}
            <View style={tailwind('w-full')}>
              {placeholder ? (
                <View style={tailwind('rounded w-full h-6 bg-gray-200')} />
              ) : (
                <Text
                  numberOfLines={truncate ? 1 : null}
                  style={{
                    ...tailwind('text-xl text-white'),
                    fontFamily: 'Poppins_700Bold',
                  }}
                >
                  {name}
                </Text>
              )}
            </View>
          </View>
        </TouchableOpacity>
      ) : null}
    </>
  )
}

export default React.memo(GameCard)
