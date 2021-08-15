import React, { useContext } from 'react'
import { View, Text, FlatList } from 'react-native'
import { SearchContext } from '../context/SearchContext'
import { tailwind } from '../../tailwind'
import {
  useFonts,
  Poppins_400Regular,
  Poppins_700Bold,
} from '@expo-google-fonts/poppins'
import GameCard from './GameCard'
import CategoryCard from './CategoryCard'
import AppLoading from 'expo-app-loading'
import { useRoute } from '@react-navigation/native'

const SearchResults = () => {
  const { text, result } = useContext(SearchContext)
  const [searchText] = text
  const [searchResult] = result

  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_700Bold,
  })

  const route = useRoute()

  const GameCardItem = ({ item }) => (
    <View style={tailwind('mb-6')}>
      <GameCard
        name={item.name}
        image={item.background_image}
        platforms={item.parent_platforms}
        score={item.metacritic}
      />
    </View>
  )

  const CategoryCardItem = ({ item }) => (
    <View style={tailwind('mb-6')}>
      <CategoryCard
        name={item.name}
        image={item.image_background}
        games={item.games}
        gamesCount={item.games_count}
      />
    </View>
  )

  return (
    <>
      {fontsLoaded ? (
        <View style={tailwind('px-4 mt-6 flex-1')}>
          <Text
            style={{
              ...tailwind('text-white text-2xl'),
              fontFamily: 'Poppins_700Bold',
            }}
          >
            {new Intl.NumberFormat('en-EN').format(searchResult.count)} items
            found
          </Text>

          <FlatList
            showsVerticalScrollIndicator={false}
            data={searchResult.results}
            keyExtractor={(item) => item.name}
            renderItem={
              route.params && route.params.card === 'game'
                ? GameCardItem
                : CategoryCardItem
            }
            style={tailwind('mt-4')}
          />
        </View>
      ) : (
        <AppLoading />
      )}
    </>
  )
}

export default SearchResults
