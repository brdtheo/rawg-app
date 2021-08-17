import React from 'react'
import { SafeAreaView, View } from 'react-native'
import { tailwind } from '../../tailwind'
import Header from '../components/Header'
import SearchResults from '../components/SearchResults'

const SearchScreen = () => {
  return (
    <SafeAreaView style={tailwind('bg-main-grey flex-1')}>
      <View style={tailwind('bg-main-grey flex-1')}>
        <Header arrow />
        <SearchResults />
      </View>
    </SafeAreaView>
  )
}

export default SearchScreen
