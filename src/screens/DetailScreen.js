import React, { useState, useEffect, useContext } from 'react'
import {
  View,
  Text,
  SafeAreaView,
  ActivityIndicator,
  ScrollView,
  TouchableOpacity,
} from 'react-native'
import { tailwind } from '../../tailwind'
import fetchData from '../api/rawg'
import Header from '../components/Header'
import { SearchContext } from '../context/SearchContext'
import { useRoute } from '@react-navigation/native'
import { getScoreColor } from '../utilities/Utils'
import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold,
} from '@expo-google-fonts/poppins'
import moment from 'moment'
import axios from 'axios'
import { Linking } from 'react-native'
import GameDetailHeader from '../components/detail-screen/GameDetailHeader'
import GameDetailScreenshots from '../components/detail-screen/GameDetailScreenshots'
import GameDetailStores from '../components/detail-screen/GameDetailStores'
import GameDetailAbout from '../components/detail-screen/GameDetailAbout'
import GameDetailInfoGrid from '../components/detail-screen/GameDetailInfoGrid'

const GameDetail = () => {
  const [gameData, setGameData] = useState(null)
  const [gameScreenshots, setGameScreenshots] = useState(null)
  const [gameStores, setGameStores] = useState(null)
  const { header } = useContext(SearchContext)
  const [expandHeader, setExpandHeader] = header
  const gameSlug = useRoute().params.slug
  useEffect(() => {
    setExpandHeader(false)
    getDameData()

    return () => {
      setExpandHeader(true)
      setGameData(null)
      setGameScreenshots(null)
      setGameStores(null)
    }
  }, [])

  const getDameData = async () => {
    try {
      const gameData = await axios.all([
        fetchData(`games/${gameSlug}`, '?'),
        fetchData(`games/${gameSlug}/screenshots`, '?'),
        fetchData(`games/${gameSlug}/stores`, '?'),
      ])

      setGameData(gameData[0])
      setGameScreenshots(gameData[1])
      setGameStores(gameData[2])
    } catch (err) {
      console.error(err)
    }
  }

  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold,
  })

  return (
    <SafeAreaView style={tailwind('bg-main-grey flex-1')}>
      <View style={tailwind('flex-1')}>
        <Header arrow />
        {gameData && gameScreenshots && gameStores && fontsLoaded ? (
          <ScrollView style={tailwind('mt-4 flex-1')}>
            <GameDetailHeader
              releaseDate={gameData.released}
              platforms={gameData.parent_platforms}
              name={gameData.name}
            />

            {gameScreenshots.results.length ? (
              <GameDetailScreenshots data={gameScreenshots.results} />
            ) : null}

            {gameData.stores.length ? (
              <GameDetailStores gameData={gameData} gameStores={gameStores} />
            ) : null}

            <GameDetailAbout description={gameData.description_raw} />

            <GameDetailInfoGrid
              platforms={gameData.parent_platforms}
              metacritic={gameData.metacritic}
              genres={gameData.genres}
              releaseDate={gameData.released}
              updateDate={gameData.updated}
              playtime={gameData.playtime}
              website={gameData.website}
              achievementsCount={gameData.achievements_count}
              esrb={gameData.esrb_rating}
            />
          </ScrollView>
        ) : (
          <View style={tailwind('justify-center items-center flex-1')}>
            <ActivityIndicator />
          </View>
        )}
      </View>
    </SafeAreaView>
  )
}

export default GameDetail
