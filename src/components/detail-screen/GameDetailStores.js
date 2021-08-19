import React from 'react'
import { View, TouchableOpacity, Text } from 'react-native'
import { tailwind } from '../../../tailwind'
import { getStoreIcon } from '../../utilities/Utils'

const GameDetailStores = ({ gameData, gameStores }) => {
  const findStoreURL = (storeId) => {
    return gameStores.results.find((s) => s.store_id == storeId).url
  }

  return (
    <View style={tailwind('mx-4 mb-6')}>
      <Text
        style={{
          ...tailwind('text-lg text-white text-opacity-40 mb-1.5'),
          fontFamily: 'Poppins_400Regular',
        }}
      >
        Where to buy
      </Text>
      <View style={tailwind('flex-row flex-wrap')}>
        {gameData.stores.map((item, index) => (
          <TouchableOpacity
            key={index.toString()}
            style={{
              ...tailwind(
                'bg-store-grey py-3 rounded-lg flex-row justify-center items-center'
              ),
              width: '49%',
              marginBottom: index === gameData.stores.length - 1 ? 0 : 8,
            }}
            onPress={() => Linking.openURL(findStoreURL(item.store.id))}
          >
            <Text
              style={{
                ...tailwind('text-white text-opacity-40 text-xs'),
                fontFamily: 'Poppins_400Regular',
              }}
            >
              {item.store.name}
            </Text>
            <View style={tailwind('opacity-40 w-5 ml-1 justify-center')}>
              {getStoreIcon(item.store.slug)}
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  )
}

export default GameDetailStores
