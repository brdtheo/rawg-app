import React, { useContext } from 'react'
import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import { SearchContext } from '../../context/SearchContext'
import { tailwind } from '../../../tailwind'
import {
  useFonts,
  Poppins_400Regular,
  Poppins_700Bold,
} from '@expo-google-fonts/poppins'
import GameCard from '../GameCard'
import CategoryCard from '../CategoryCard'
import ReviewCard from '../ReviewCard'
import { useRoute } from '@react-navigation/native'
import { formatNumber, fetchNextData } from '../../utilities/Utils'
import { Ionicons } from '@expo/vector-icons'

const SearchResults = () => {
  const { text, result, header } = useContext(SearchContext)
  const [searchText] = text
  const [searchResult, setSearchResult] = result
  const [expandHeader, setExpandHeader] = header

  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_700Bold,
  })

  const route = useRoute()

  const GameCardItem = (item) => (
    <View style={tailwind('mb-6')}>
      <GameCard
        name={item.name}
        image={item.background_image}
        platforms={item.parent_platforms}
        score={item.metacritic}
        slug={item.slug}
      />
    </View>
  )

  const CategoryCardItem = (item) => (
    <View style={tailwind('mb-6')}>
      <CategoryCard
        name={item.name}
        image={item.image_background}
        games={item.games}
        gamesCount={item.games_count}
      />
    </View>
  )

  const ReviewCardItem = (item) => (
    <View style={tailwind('mb-6')}>
      <ReviewCard
        image={item.game.background_image}
        title={item.game.name}
        content={item.text}
        date={item.edited ? item.edited : item.created}
        author={item.user.username}
        likes={item.likes_rating}
        rating={item.rating}
      />
    </View>
  )

  return (
    <>
      {fontsLoaded ? (
        <View
          style={{
            ...tailwind('px-4 flex-1'),
            marginTop: expandHeader ? 0 : 12,
          }}
        >
          <View style={tailwind('flex-row justify-between items-center')}>
            <Text
              style={{
                ...tailwind('text-white text-2xl'),
                fontFamily: 'Poppins_700Bold',
              }}
              numberOfLines={1}
            >
              {searchResult && searchResult.count
                ? `${formatNumber(searchResult.count)} items found`
                : 'loading data...'}
            </Text>

            <TouchableOpacity
              style={tailwind(
                'rounded-lg bg-card-grey h-8 w-8 items-center justify-center'
              )}
              onPress={() => setExpandHeader(!expandHeader)}
            >
              {expandHeader ? (
                <Ionicons name="chevron-up" size={14} color="white" />
              ) : (
                <Ionicons name="chevron-down" size={14} color="white" />
              )}
            </TouchableOpacity>
          </View>

          {searchResult && searchResult.results ? (
            <FlatList
              data={searchResult.results}
              keyExtractor={(item) => item.slug}
              renderItem={({ item }) => {
                if (route.params.card === 'game') {
                  return GameCardItem(item)
                } else if (route.params.card === 'category') {
                  return CategoryCardItem(item)
                } else if (route.params.card === 'review') {
                  return ReviewCardItem(item)
                } else {
                  return console.error(
                    'Error: no card parameter provided in Search route'
                  )
                }
              }}
              style={tailwind('mt-4')}
              onEndReached={() => fetchNextData(searchResult, setSearchResult)}
            />
          ) : (
            <View style={tailwind('w-full mt-4')}>
              <View style={tailwind('mb-6')}>
                <GameCard placeholder />
              </View>
              <View style={tailwind('mb-6')}>
                <GameCard placeholder />
              </View>
              <View style={tailwind('mb-6')}>
                <GameCard placeholder />
              </View>
              <View style={tailwind('mb-6')}>
                <GameCard placeholder />
              </View>
              <View style={tailwind('mb-6')}>
                <GameCard placeholder />
              </View>
            </View>
          )}
        </View>
      ) : null}
    </>
  )
}

export default SearchResults
