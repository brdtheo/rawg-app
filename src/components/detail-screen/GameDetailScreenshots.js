import React from 'react'
import { View, FlatList, Image } from 'react-native'
import { tailwind } from '../../../tailwind'

const GameDetailScreenshots = ({ data }) => {
  const ScreenshotItem = ({ item }) => (
    <View style={tailwind('mr-6 w-60 h-full')}>
      <Image
        source={{ uri: item.image }}
        style={tailwind('w-full h-full rounded-lg')}
      />
    </View>
  )

  return (
    <View style={tailwind('w-full mb-6')}>
      <FlatList
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={tailwind('pl-4 h-36')}
        horizontal={true}
        data={data}
        keyExtractor={(item) => item.image}
        renderItem={ScreenshotItem}
      />
    </View>
  )
}

export default GameDetailScreenshots
