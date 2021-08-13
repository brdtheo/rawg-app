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

const Header = () => {
  useEffect(() => {
    getGamesCount()
  }, [])

  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_900Black,
  })

  const { searchResult, setSearchResult } = useContext(SearchContext)
  const [searchText, setSearchText] = useState('')
  const [gamesCount, setGamesCount] = useState(0)

  const getSearchResult = async () => {
    if (!searchText) {
      return
    }

    try {
      const text = searchText.split(' ').join('-')
      const gamesList = await fetchData(`games?search=${searchText}`, '&')
      console.log(gamesList)
    } catch (err) {
      console.log(err)
    }
  }

  const getGamesCount = async () => {
    try {
      const gamesList = await fetchData('games', '?')
      const count = new Intl.NumberFormat('en-EN').format(gamesList.count)
      setGamesCount(count)
    } catch (err) {
      console.log(err)
    }
  }

  const searchInput = useRef(null)

  return (
    <>
      {fontsLoaded ? (
        <View style={tailwind('px-4')}>
          <Text
            style={{
              ...tailwind('text-white text-2xl tracking-widest mt-6 mb-2'),
              fontFamily: 'Poppins_900Black',
            }}
          >
            RAWG
          </Text>
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
        </View>
      ) : (
        <AppLoading />
      )}
    </>
  )
}

export default Header
