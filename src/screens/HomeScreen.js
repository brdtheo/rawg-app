import React from 'react'
import { SafeAreaView, Text } from 'react-native'
import { tailwind } from '../../tailwind'

const HomeScreen = () => {
  return (
    <>
      <SafeAreaView
        style={tailwind('bg-main-grey flex-1 flex justify-center items-center')}
      >
        <Text style={tailwind('text-white')}>Home</Text>
      </SafeAreaView>
    </>
  )
}

export default HomeScreen
