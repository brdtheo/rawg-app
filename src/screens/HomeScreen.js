import { React } from 'react'
import { SafeAreaView } from 'react-native'
import { tailwind } from '../../tailwind'
import Header from '../components/Header'

const HomeScreen = () => {
  return (
    <SafeAreaView style={tailwind('bg-main-grey flex-1')}>
      <Header />
    </SafeAreaView>
  )
}

export default HomeScreen
