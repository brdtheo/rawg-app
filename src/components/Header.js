import React, { useContext, useState, useEffect, useRef } from 'react'
import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import { tailwind } from '../../tailwind'
import AppLoading from 'expo-app-loading'
import {
  useFonts,
  Poppins_400Regular,
  Poppins_900Black,
} from '@expo-google-fonts/poppins'
import { SearchContext } from '../context/SearchContext'
import fetchData from '../api/rawg'
import { Ionicons } from '@expo/vector-icons'
import RawgSelect from './RawgSelect'
import { useRoute } from '@react-navigation/native'

const Header = ({ arrow, navigation }) => {
  useEffect(() => {
    getGamesCount()
    getPlatforms()
  }, [])

  const routeName = useRoute().name

  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_900Black,
  })

  const { result, text } = useContext(SearchContext)
  const [searchResult, setSearchResult] = result
  const [searchText, setSearchText] = text
  const [gamesCount, setGamesCount] = useState(0)
  const [gamesPlatforms, setGamesPlatforms] = useState(null)

  const getSearchResult = async () => {
    let query

    if (!searchText) {
      query = fetchData('games', '?')
    } else {
      query = fetchData(`games?search=${searchText}`, '&')
    }

    try {
      const text = searchText.split(' ').join('-')
      const gamesList = await query
      await setSearchResult(gamesList)
      navigation.navigate('Search')
    } catch (err) {
      console.error(err)
    }
  }

  const getGamesCount = async () => {
    try {
      const gamesList = await fetchData('games', '?')
      const count = new Intl.NumberFormat('en-EN').format(gamesList.count)
      setGamesCount(count)
    } catch (err) {
      console.error(err)
    }
  }

  const getPlatforms = async () => {
    try {
      const platformsData = await fetchData('platforms', '?')
      const platforms = []
      platformsData.results.forEach((p) => {
        platforms.push({ label: p.name, value: p.id })
      })

      setGamesPlatforms(platforms)
    } catch (err) {
      console.error(err)
    }
  }

  const searchInput = useRef(null)

  return (
    <>
      {fontsLoaded ? (
        <View style={tailwind('px-4')}>
          <View style={tailwind('flex flex-row items-center mt-6 mb-2')}>
            {arrow ? (
              <TouchableOpacity
                style={tailwind('mr-2')}
                onPress={() => navigation.pop()}
              >
                <Ionicons name="arrow-back" size={24} color="white" />
              </TouchableOpacity>
            ) : null}
            <Text
              style={{
                ...tailwind('text-white text-2xl tracking-widest'),
                fontFamily: 'Poppins_900Black',
              }}
            >
              RAWG
            </Text>
          </View>

          <View
            style={tailwind(
              'flex flex-row bg-secondary-grey rounded-full h-10 text-white'
            )}
          >
            <TouchableOpacity
              style={tailwind('flex items-center justify-center w-12')}
              onPress={() => searchInput.current.focus()}
            >
              <Ionicons
                name="search-sharp"
                size={18}
                color="rgba(255,255,255,0.6)"
              />
            </TouchableOpacity>

            <TextInput
              placeholder={gamesCount ? `Search ${gamesCount} games` : null}
              placeholderTextColor="rgba(255,255,255,0.6)"
              keyboardType="web-search"
              keyboardAppearance="dark"
              autoCapitalize="none"
              autoCorrect={false}
              style={tailwind('flex-1 pr-8 text-white')}
              onSubmitEditing={getSearchResult}
              onChangeText={setSearchText}
              value={searchText}
              ref={searchInput}
            />
          </View>

          {routeName === 'Search' && gamesPlatforms ? (
            <View style={tailwind('w-full flex flex-row mt-3')}>
              <View style={tailwind('w-2/5 mr-3')}>
                <RawgSelect placeholder="Platforms" items={gamesPlatforms} />
              </View>
              <View style={tailwind('flex-1')}>
                <RawgSelect
                  placeholder="Order by"
                  items={[
                    { label: 'Relevance', value: '-relevance' },
                    { label: 'Date added', value: '-created' },
                    { label: 'Name', value: 'name' },
                    { label: 'Release date', value: '-released' },
                    { label: 'Popularity', value: '-added' },
                    { label: 'Average rating', value: '-rating' },
                  ]}
                />
              </View>
            </View>
          ) : null}
        </View>
      ) : (
        <AppLoading />
      )}
    </>
  )
}

export default Header
