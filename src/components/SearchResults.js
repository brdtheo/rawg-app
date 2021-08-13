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
import AppLoading from 'expo-app-loading'

const SearchResults = () => {
  const { text, result } = useContext(SearchContext)
  const [searchText] = text
  const [searchResult] = result

  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_700Bold,
  })

  const Item = ({ item }) => (
    <GameCard
      name={item.name}
      image={item.background_image}
      platforms={item.parent_platforms}
      score={item.metacritic}
    />
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
            {searchResult.count} items found
          </Text>

          <FlatList
            data={searchResult.results}
            keyExtractor={(item) => item.name}
            renderItem={Item}
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
