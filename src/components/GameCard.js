import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import { tailwind } from '../../tailwind'
import { useFonts, Poppins_700Bold } from '@expo-google-fonts/poppins'
import AppLoading from 'expo-app-loading'
import { Ionicons, FontAwesome5 } from '@expo/vector-icons'

const GameCard = ({ name, image, platforms, score }) => {
  const [fontsLoaded] = useFonts({
    Poppins_700Bold,
  })

  const getIcon = (platform) => {
    switch (platform) {
      case 'Xbox':
        return (
          <Ionicons
            style={tailwind('mr-1')}
            name="logo-xbox"
            size={16}
            color="white"
          />
        )
      case 'PlayStation':
        return (
          <Ionicons
            style={tailwind('mr-1')}
            name="logo-playstation"
            size={16}
            color="white"
          />
        )
      case 'PC':
        return (
          <Ionicons
            style={tailwind('mr-1')}
            name="logo-windows"
            size={16}
            color="white"
          />
        )
      case 'iOS':
        return (
          <Ionicons
            style={tailwind('mr-1')}
            name="phone-portrait-sharp"
            size={16}
            color="white"
          />
        )
      case 'Android':
        return (
          <Ionicons
            style={tailwind('mr-1')}
            name="logo-android"
            size={16}
            color="white"
          />
        )
      case 'Web':
        return (
          <Ionicons
            style={tailwind('mr-1')}
            name="globe-outline"
            size={16}
            color="white"
          />
        )
      case 'Apple Macintosh':
        return (
          <Ionicons
            style={tailwind('mr-1')}
            name="logo-apple"
            size={16}
            color="white"
          />
        )
      case 'Linux':
        return (
          <FontAwesome5
            style={tailwind('mr-1')}
            name="linux"
            size={16}
            color="white"
          />
        )
      default:
        return <Text style={tailwind('text-white')}>{platform}</Text>
    }
  }

  const getScoreColor = (score) => {
    const parsedScore = parseInt(score)

    if (!score) {
      console.error('cannot return score color: no score provided')
    }

    if (parsedScore > 50 && parsedScore < 75) {
      return '#FDCA52'
    } else if (parsedScore >= 75) {
      return '#44BD49'
    } else {
      return '#fff'
    }
  }

  return (
    <>
      {fontsLoaded ? (
        <TouchableOpacity
          style={{
            ...tailwind('rounded-2xl bg-card-grey w-full mb-6'),
            shadowColor: '#202020',
            shadowOpacity: 0.07,
            shadowOffset: {
              width: 0,
              height: 8,
            },
            shadowRadius: 4,
            elevation: 2,
          }}
        >
          {image ? (
            <Image
              style={tailwind('w-full h-36 rounded-t-2xl')}
              source={{
                uri: image,
              }}
            />
          ) : null}
          <View style={tailwind('p-4 w-full')}>
            <View
              style={tailwind(
                'w-full flex flex-row justify-between items-center mb-2'
              )}
            >
              <View style={tailwind('flex flex-row')}>
                {platforms.map((platform) => getIcon(platform.platform.name))}
              </View>
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
            <View>
              <Text
                style={{
                  ...tailwind('text-xl text-white'),
                  fontFamily: 'Poppins_700Bold',
                }}
              >
                {name}
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      ) : (
        <AppLoading />
      )}
    </>
  )
}

export default GameCard
