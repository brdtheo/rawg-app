import React from 'react'
import { SafeAreaView, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { tailwind } from './tailwind'

const App = () => {
  return (
    <>
      <SafeAreaView
        style={tailwind('bg-main-grey flex-1 flex justify-center items-center')}
      >
        <Text style={tailwind('text-white font-poppins')}>Home</Text>
        <TouchableOpacity
          style={tailwind('px-4 py-2 bg-white rounded-xl mt-6')}
        >
          <Text style={tailwind('text-main-grey')}>Other page</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </>
  )
}

export default App
