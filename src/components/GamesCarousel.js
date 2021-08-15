import React from 'react'
import { FlatList, View, Text } from 'react-native'
import { tailwind } from '../../tailwind'
import { useFonts, Poppins_700Bold } from '@expo-google-fonts/poppins'
import GameCard from './GameCard'

const GamesCarousel = ({ title, data, loading }) => {
  const [fontsLoaded] = useFonts({
    Poppins_700Bold,
  })

  const Item = ({ item }) => (
    <View style={tailwind('w-80 mr-6')}>
      <GameCard
        truncate
        name={item.name}
        image={item.background_image}
        platforms={item.parent_platforms}
        score={item.metacritic}
      />
    </View>
  )

  return (
    <>
      {fontsLoaded ? (
        <View style={tailwind('w-full text-xl mb-12')}>
          <Text
            style={{
              ...tailwind('px-4 text-white text-2xl mb-2'),
              fontFamily: 'Poppins_700Bold',
            }}
          >
            {title}
          </Text>
          {loading ? (
            <View style={tailwind('w-full pl-4 flex-row')}>
              <View style={tailwind('w-80 mr-6')}>
                <GameCard placeholder />
              </View>
              <View style={tailwind('w-80 mr-6')}>
                <GameCard placeholder />
              </View>
              <View style={tailwind('w-80 mr-6')}>
                <GameCard placeholder />
              </View>
              <View style={tailwind('w-80 mr-6')}>
                <GameCard placeholder />
              </View>
              <View style={tailwind('w-80 mr-6')}>
                <GameCard placeholder />
              </View>
            </View>
          ) : (
            <FlatList
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={tailwind('pl-4')}
              horizontal={true}
              data={data}
              keyExtractor={(item, index) => index.toString()}
              renderItem={Item}
            />
          )}
        </View>
      ) : null}
    </>
  )
}

export default GamesCarousel
