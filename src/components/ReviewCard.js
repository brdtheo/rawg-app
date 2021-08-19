import React from 'react'
import { Text, View, ImageBackground } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { tailwind } from '../../tailwind'
import {
  useFonts,
  Poppins_700Bold,
  Poppins_400Regular,
} from '@expo-google-fonts/poppins'
import RenderHTML from 'react-native-render-html'
import { ScrollView } from 'react-native'
import { formatDate } from '../utilities/Utils'

const ReviewCard = ({
  image,
  title,
  rating,
  content,
  date,
  author,
  authorAvatar,
  placeholder,
}) => {
  const [fontsLoaded] = useFonts({
    Poppins_700Bold,
    Poppins_400Regular,
  })

  const getRatingIcon = (rating) => {
    let uri

    switch (rating) {
      case 1:
        uri = require('../../assets/skip.png')
        break
      case 3:
        uri = require('../../assets/meh.png')
        break
      case 4:
        uri = require('../../assets/recommended.png')
        break
      case 5:
        uri = require('../../assets/exceptional.png')
        break
    }

    return (
      <View style={tailwind('w-6 h-6')}>
        <ImageBackground style={tailwind('w-full h-full')} source={uri} />
      </View>
    )
  }

  return (
    <>
      {fontsLoaded ? (
        <ScrollView
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
          {image ? (
            <ImageBackground
              source={{ uri: image }}
              style={tailwind('w-full h-32 absolute top-0 left-0')}
            >
              <LinearGradient
                end={{ x: 0.5, y: 0.8 }}
                colors={['rgba(32,32,32,0.6)', '#202020']}
                style={tailwind('w-full h-full')}
              />
            </ImageBackground>
          ) : null}

          <View style={tailwind('p-6')}>
            {placeholder ? (
              <View
                style={tailwind('flex-row mb-2 items-center w-full flex-wrap')}
              >
                <View style={tailwind('rounded bg-gray-200 flex-1 h-8')} />
                <View style={tailwind('ml-12 rounded bg-gray-200 w-12 h-8')} />
              </View>
            ) : (
              <View
                style={tailwind('flex-row mb-2 items-center w-full flex-wrap')}
              >
                {title ? (
                  <Text
                    style={{
                      ...tailwind('underline text-xl text-white mr-1 flex-1'),
                      fontFamily: 'Poppins_700Bold',
                    }}
                  >
                    {title}
                  </Text>
                ) : null}
                <View>{getRatingIcon(rating)}</View>
              </View>
            )}

            <View style={tailwind('mb-4')}>
              {placeholder ? (
                <View style={tailwind('rounded bg-gray-200 w-32 h-6')} />
              ) : (
                <View style={tailwind('flex-row')}>
                  {authorAvatar || author.avatar ? (
                    <View
                      style={tailwind(
                        'w-8 h-8 mr-2 rounded-full overflow-hidden'
                      )}
                    >
                      <ImageBackground
                        style={tailwind('w-full h-full')}
                        source={{
                          uri: author.avatar ? author.avatar : authorAvatar,
                        }}
                      />
                    </View>
                  ) : null}
                  <View>
                    <Text
                      style={{
                        ...tailwind('text-white text-xs'),
                        fontFamily: 'Poppins_400Regular',
                      }}
                    >
                      {author.username
                        ? author.username
                        : author}
                    </Text>
                    <Text
                      style={{
                        ...tailwind('text-white text-xs text-opacity-60'),
                        fontFamily: 'Poppins_400Regular',
                      }}
                    >
                      {formatDate(date)}
                    </Text>
                  </View>
                </View>
              )}
            </View>

            {placeholder ? (
              <View style={tailwind('rounded bg-gray-200 w-full h-full')} />
            ) : (
              <RenderHTML
                source={{
                  html: `<div style="color: white; opacity: 0.6; font-size: 1rem; line-height: 1.5rem;">${content}</div>`,
                }}
                contentWidth={100}
              />
            )}
          </View>
        </ScrollView>
      ) : null}
    </>
  )
}

export default React.memo(ReviewCard)
