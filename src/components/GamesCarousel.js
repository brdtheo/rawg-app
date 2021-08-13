import React, { useContext } from 'react'
import { FlatList, View, Text } from 'react-native'
import { tailwind } from '../../tailwind'
import { useFonts, Poppins_700Bold } from '@expo-google-fonts/poppins'
import { SearchContext } from '../context/SearchContext'
import GameCard from './GameCard'

const GamesCarousel = ({ title }) => {
  const [fontsLoaded] = useFonts({
    Poppins_700Bold,
  })

  const { result } = useContext(SearchContext)
  const [searchResult] = result

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
          <FlatList
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={tailwind('pl-4')}
            horizontal={true}
            data={searchResult.results}
            keyExtractor={(item) => item.name}
            renderItem={Item}
          />
        </View>
      ) : null}
    </>
  )
}

export default GamesCarousel
