import React from 'react'
import { SafeAreaView, Text } from 'react-native'
import { tailwind } from '../../tailwind'
import AppLoading from 'expo-app-loading'
import { useFonts, Poppins_700Bold } from '@expo-google-fonts/poppins'

const HomeScreen = () => {
  let [fontsLoaded] = useFonts({
    Poppins_700Bold,
  })

  if (fontsLoaded) {
    return (
      <>
        <SafeAreaView
          style={tailwind(
            'bg-main-grey flex-1 flex justify-center items-center'
          )}
        >
          <Text
            style={{
              ...tailwind('text-white text-4xl'),
              fontFamily: 'Poppins_700Bold',
            }}
          >
            Home
          </Text>
        </SafeAreaView>
      </>
    )
  } else {
    return <AppLoading />
  }
}

export default HomeScreen
