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
      iconProvider: 'Ionicons',
      icon: 'md-game-controller',
      title: 'Platforms',
      query: 'platforms',
    },
    {
      iconProvider: 'MaterialIcons',
      icon: 'file-download',
      title: 'Stores',
      query: 'stores',
    },
    {
      iconProvider: 'Ionicons',
      icon: 'folder',
      title: 'Collections',
      query: 'collections',
    },
    {
      iconProvider: 'Ionicons',
      icon: 'chatbox',
      title: 'Reviews',
      query: 'reviews',
    },
    {
      iconProvider: 'FontAwesome5',
      icon: 'ghost',
      title: 'Genres',
      query: 'genres',
    },
    {
      iconProvider: 'Ionicons',
      icon: 'person',
      title: 'Creators',
      query: 'creators',
    },
    {
      iconProvider: 'FontAwesome5',
      icon: 'hashtag',
      title: 'Tags',
      query: 'tags',
    },
    {
      iconProvider: 'Ionicons',
      icon: 'code-slash-outline',
      title: 'Developers',
      query: 'developers',
    },
    {
      iconProvider: 'Ionicons',
      icon: 'list',
      title: 'Publishers',
      query: 'publishers',
    },
  ]

  const Item = ({ item }) => (
    <BrowseButton
      icon={item.icon}
      title={item.title}
      iconProvider={item.iconProvider}
      navigation={navigation}
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
