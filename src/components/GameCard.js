import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import { tailwind } from '../../tailwind'
import { useFonts, Poppins_700Bold } from '@expo-google-fonts/poppins'
import NintendoIcon from './icons/NintendoIcon'
import WindowsIcon from './icons/WindowsIcon'
import PlaystationIcon from './icons/PlaystationIcon'
import XboxIcon from './icons/XboxIcon'
import PhoneIcon from './icons/PhoneIcon'
import AndroidIcon from './icons/AndroidIcon'
import LinuxIcon from './icons/LinuxIcon'
import AppleIcon from './icons/AppleIcon'
import GlobeIcon from './icons/GlobeIcon'
import AtariIcon from './icons/AtariIcon'
import SegaIcon from './icons/SegaIcon'
import CommodoreIcon from './icons/CommodoreIcon'
import ThreeDOIcon from './icons/ThreeDOIcon'
import { useNavigation } from '@react-navigation/native'

const GameCard = ({ name, image, platforms, score, truncate, placeholder }) => {
  const [fontsLoaded] = useFonts({
    Poppins_700Bold,
  })
  const navigation = useNavigation()

  const getIcon = (platform) => {
    switch (platform) {
      case 'Xbox':
        return <XboxIcon size={14} />
      case 'PlayStation':
        return <PlaystationIcon size={16} />
      case 'PC':
        return <WindowsIcon size={13} />
      case 'iOS':
        return <PhoneIcon size={15} />
      case 'Android':
        return <AndroidIcon size={16} />
      case 'Web':
        return <GlobeIcon size={14} />
      case 'Apple Macintosh':
        return <AppleIcon size={15} />
      case 'Linux':
        return <LinuxIcon size={16} />
      case 'Nintendo':
        return <NintendoIcon size={16} />
      case 'SEGA':
        return <SegaIcon size={16} />
      case 'Atari':
        return <AtariIcon size={16} />
      case 'Commodore / Amiga':
        return <CommodoreIcon size={16} />
      case '3DO':
        return <ThreeDOIcon size={16} />
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
          onPress={() => navigation.navigate('Detail')}
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
                    {platforms.map((platform) =>
                      getIcon(platform.platform.name)
                    )}
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
