import React from 'react'
import { SafeAreaView, Text } from 'react-native'
import { tailwind } from './tailwind'

const App = () => {
  return (
    <>
      <SafeAreaView style={tailwind('bg-main-grey flex-1')}>
        <Text style={tailwind('text-white')}>Test</Text>
      </SafeAreaView>
    </>
  )
}

export default App
