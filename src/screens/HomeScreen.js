import React from 'react'
import { SafeAreaView, View } from 'react-native'
import tailwind from '../../tailwind'
import Header from '../components/Header'

const HomeScreen = () => {
  return (
    <SafeAreaView style={tailwind('bg-main-grey flex-1')}>
      <View>
        <Header />
      </View>
    </SafeAreaView>
  )
}

export default HomeScreen
