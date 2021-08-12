import React, { useState, useEffect } from 'react'
import { SafeAreaView, View } from 'react-native'
import { tailwind } from '../../tailwind'
import Header from '../components/Header'
import fetchData from '../api/rawg'

const HomeScreen = () => {
  const [gamesCount, setGamesCount] = useState(0)

  useEffect(()=>{
    getGamesCount()
  }, [])

  const getGamesCount = async () => {
    try {
      const gamesList = await fetchData(`games`)
      const count = new Intl.NumberFormat('en-EN').format(gamesList.count)
      setGamesCount(count)
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <SafeAreaView style={tailwind('bg-main-grey flex-1')}>
      <View>
        <Header gamesCount={gamesCount} />
      </View>
    </SafeAreaView>
  )
}

export default HomeScreen
