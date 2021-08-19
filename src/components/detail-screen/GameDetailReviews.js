import React from 'react'
import { View, Text } from 'react-native'
import {
  useFonts,
  Poppins_400Regular,
  Poppins_700Bold,
} from '@expo-google-fonts/poppins'
import { tailwind } from '../../../tailwind'
import { FlatList } from 'react-native'
import ReviewCard from '../ReviewCard'

const GameDetailReviews = ({ reviews }) => {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_700Bold,
  })

  const ReviewItem = ({ item }) => (
    <View style={tailwind('mb-4')}>
      <ReviewCard
        content={item.text}
        date={item.edited ? item.edited : item.created}
        author={item.user ? item.user.username : null}
        rating={item.rating}
      />
    </View>
  )

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

          <FlatList
            data={reviews}
            renderItem={ReviewItem}
            keyExtractor={(item) => item.id.toString()}
          />
        </View>
      ) : null}
    </>
  )
}

export default GameDetailReviews
