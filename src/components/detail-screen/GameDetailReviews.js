import React from 'react'
import { View, Text } from 'react-native'
import {
  useFonts,
  Poppins_400Regular,
  Poppins_700Bold,
} from '@expo-google-fonts/poppins'
import { tailwind } from '../../../tailwind'
import ReviewCard from '../ReviewCard'

const GameDetailReviews = ({ reviews }) => {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_700Bold,
  })

  console.log(reviews)

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
            Reviews
          </Text>

          {reviews.map((item, index) => {
            return (
              <View style={tailwind('mb-4')} key={index.toString()}>
                <ReviewCard
                  content={item.text}
                  date={item.edited ? item.edited : item.created}
                  author={item.user ? item.user : item.external_author}
                  authorAvatar={
                    item.user ? item.user.avatar : item.external_avatar
                  }
                  rating={item.rating}
                />
              </View>
            )
          })}
        </View>
      ) : null}
    </>
  )
}

export default GameDetailReviews
