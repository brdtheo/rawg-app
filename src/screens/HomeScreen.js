import React, { useContext } from 'react'
import { SafeAreaView, ScrollView, View } from 'react-native'
import { tailwind } from '../../tailwind'
import BrowseSection from '../components/BrowseSection'
import GamesCarousel from '../components/GamesCarousel'
import Header from '../components/Header'
import { CarouselProvider } from '../context/CarouselContext'
import { CarouselContext } from '../context/CarouselContext'

const HomeScreen = ({ navigation }) => {
  const { newReleases, bestScore } = useContext(CarouselContext)
  

  return (
    <CarouselProvider>
      <SafeAreaView style={tailwind('bg-main-grey flex-1')}>
        <ScrollView>
          <Header navigation={navigation} />
          <BrowseSection />
          <GamesCarousel title="New releases" />
          <GamesCarousel title="Best score" />
        </ScrollView>
      </SafeAreaView>
    </CarouselProvider>
  )
}

export default HomeScreen
