import React, { useState, useEffect } from 'react'
import { SafeAreaView, ScrollView } from 'react-native'
import { tailwind } from '../../tailwind'
import BrowseSection from '../components/BrowseSection'
import GamesCarousel from '../components/GamesCarousel'
import Header from '../components/Header'
import fetchData from '../api/rawg'
import axios from 'axios'

const HomeScreen = ({ navigation }) => {
  const [newReleases, setNewReleases] = useState(null)
  const [bestScore, setBestScore] = useState(null)

  const getData = async () => {
    try {
      const homeRequests = await axios.all([
        fetchData('games?ordering=released', '&'),
        fetchData('games?ordering=-metacritic', '&'),
      ])

      setNewReleases(homeRequests[0])
      setBestScore(homeRequests[1])
    } catch (err) {
      console.error(err)
    }
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <SafeAreaView style={tailwind('bg-main-grey flex-1')}>
      <ScrollView>
        <Header navigation={navigation} />
        <BrowseSection navigation={navigation} />
        <GamesCarousel
          title="New releases"
          data={newReleases ? newReleases.results : null}
          loading={newReleases ? false : true}
        />
        <GamesCarousel
          title="Best score"
          data={bestScore ? bestScore.results : null}
          loading={bestScore ? false : true}
        />
      </ScrollView>
    </SafeAreaView>
  )
}

export default HomeScreen
