import React from 'react'
import { SafeAreaView, View } from 'react-native'
import { tailwind } from '../../tailwind'
import BrowseSection from '../components/BrowseSection'
import Header from '../components/Header'

const HomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={tailwind('bg-main-grey flex-1')}>
      <View>
        <Header navigation={navigation} />
        <BrowseSection />
      </View>
    </SafeAreaView>
  )
}

export default HomeScreen
