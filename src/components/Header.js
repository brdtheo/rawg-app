import React, { useContext, useState } from 'react'
import { View, Text, TextInput } from 'react-native'
import { tailwind } from '../../tailwind'
import AppLoading from 'expo-app-loading'
import {
  useFonts,
  Poppins_400Regular,
  Poppins_900Black,
} from '@expo-google-fonts/poppins'
import { SearchContext } from '../context/SearchContext'
import fetchData from '../api/rawg'

const Header = () => {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_900Black,
  })

  const { searchResult, setSearchResult } = useContext(SearchContext)
  const [searchText, setSearchText] = useState('')

  const getSearchResult = async () => {
    try {
      const text = searchText.split(' ').join('-')
      const gamesList = await fetchData(`games/?search=${text}`)
      setSearchResult(gamesList)
      console.log(searchResult)
    } catch (err) {
      console.log(err)
    }
  }

  if (fontsLoaded) {
    return (
      <View style={tailwind('px-4')}>
        <Text
          style={{
            ...tailwind('text-white text-2xl tracking-widest mt-6 mb-2'),
            fontFamily: 'Poppins_900Black',
          }}
        >
          RAWG
        </Text>
        <TextInput
          placeholder="Search xxx games"
          placeholderTextColor="rgba(255,255,255,0.6)"
          keyboardType="web-search"
          keyboardAppearance="dark"
          autoCapitalize="none"
          autoCorrect={false}
          style={tailwind(
            'bg-secondary-grey rounded-full h-10 text-white px-8'
          )}
          onSubmitEditing={getSearchResult}
          onChangeText={setSearchText}
          value={searchText}
        />
      </View>
    )
  } else {
    return <AppLoading />
  }
}

export default Header
