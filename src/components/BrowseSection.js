import React from 'react'
import { View, Text, FlatList } from 'react-native'
import { tailwind } from '../../tailwind'
import BrowseButton from './BrowseButton'
import { useFonts, Poppins_700Bold } from '@expo-google-fonts/poppins'

const BrowseSection = ({ navigation }) => {
  const [fontsLoaded] = useFonts({
    Poppins_700Bold,
  })

  const categories = [
    {
      icon: 'controller',
      title: 'Platforms',
      query: 'platforms',
    },
    {
      icon: 'store',
      title: 'Stores',
      query: 'stores',
    },
    {
      icon: 'collection',
      title: 'Collections',
      query: 'collections',
    },
    {
      icon: 'review',
      title: 'Reviews',
      query: 'reviews',
    },
    {
      icon: 'genre',
      title: 'Genres',
      query: 'genres',
    },
    {
      icon: 'creator',
      title: 'Creators',
      query: 'creators',
    },
    {
      icon: 'tag',
      title: 'Tags',
      query: 'tags',
    },
    {
      icon: 'developer',
      title: 'Developers',
      query: 'developers',
    },
    {
      icon: 'publisher',
      title: 'Publishers',
      query: 'publishers',
    },
  ]

  const Item = ({ item }) => (
    <BrowseButton
      icon={item.icon}
      title={item.title}
      iconProvider={item.iconProvider}
      query={item.query}
    />
  )

  return (
    <View style={tailwind('mt-4 mb-12 flex-col')}>
      {fontsLoaded ? (
        <Text
          style={{
            ...tailwind('px-4 text-white text-2xl mb-2'),
            fontFamily: 'Poppins_700Bold',
          }}
        >
          Browse
        </Text>
      ) : null}
      <FlatList
        contentContainerStyle={tailwind('pl-4')}
        data={categories}
        renderItem={Item}
        keyExtractor={(c) => c.title}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  )
}

export default BrowseSection
