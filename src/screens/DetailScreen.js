import React, { useState, useEffect, useContext } from 'react'
import {
  View,
  Text,
  SafeAreaView,
  ActivityIndicator,
  ScrollView,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native'
import { tailwind } from '../../tailwind'
import fetchData from '../api/rawg'
import Header from '../components/Header'
import { SearchContext } from '../context/SearchContext'
import { useRoute } from '@react-navigation/native'
import { getIcon, getScoreColor } from '../utilities/Utils'
import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold,
} from '@expo-google-fonts/poppins'
import moment from 'moment'
import axios from 'axios'
import { Linking } from 'react-native'

const GameDetail = () => {
  useEffect(() => {
    setExpandHeader(false)
    getDameData()
  }, [])
  const [gameData, setGameData] = useState(null)
  const [gameScreenshots, setGameScreenshots] = useState(null)
  const [gameStores, setGameStores] = useState(null)
  const { header } = useContext(SearchContext)
  const [expandHeader, setExpandHeader] = header
  const gameSlug = useRoute().params.slug

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

  const findStoreURL = (storeId) => {
    return gameStores.results.find((s) => s.store_id == storeId).url
  }

  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold,
  })

  const StoreLink = ({ item, index }) => (
    <TouchableOpacity
      style={{
        ...tailwind('bg-store-grey py-3 rounded-lg'),
        width: '49%',
        marginBottom: index === gameData.stores.length - 1 ? 0 : 8,
      }}
      onPress={() => Linking.openURL(findStoreURL(item.store.id))}
    >
      <Text
        style={{
          ...tailwind('text-white text-opacity-40 text-xs text-center'),
          fontFamily: 'Poppins_400Regular',
        }}
      >
        {item.store.name}
      </Text>
    </TouchableOpacity>
  )

  const ScreenshotItem = ({ item }) => (
    <TouchableOpacity style={tailwind('mr-6 w-60 h-full')}>
      <Image
        source={{ uri: item.image }}
        style={tailwind('w-full h-full rounded-lg')}
      />
    </TouchableOpacity>
  )

  return (
    <SafeAreaView style={tailwind('bg-main-grey flex-1')}>
      <View style={tailwind('flex-1')}>
        <Header arrow />
        {gameData && gameScreenshots && gameStores && fontsLoaded ? (
          <ScrollView style={tailwind('mt-4 flex-1')}>
            <View style={tailwind('mx-4 flex-row w-full items-center')}>
              <View style={tailwind('bg-white rounded px-2 py-1')}>
                <Text
                  style={{
                    ...tailwind('text-main-grey tracking-widest text-xs'),
                    fontFamily: 'Poppins_400Regular',
                  }}
                >
                  {moment(gameData.released).format('MMM D, YYYY')}
                </Text>
              </View>
              <View style={tailwind('flex-row ml-2')}>
                {gameData.parent_platforms.map((platform) =>
                  getIcon(platform.platform.name)
                )}
              </View>
            </View>

            <Text
              style={{
                ...tailwind('mx-4 text-white text-3xl mb-2 w-full pt-3 pb-4'),
                fontFamily: 'Poppins_700Bold',
              }}
            >
              {gameData.name}
            </Text>

            <View style={tailwind('w-full mb-6')}>
              <FlatList
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={tailwind('pl-4 h-36')}
                horizontal={true}
                data={gameScreenshots.results}
                keyExtractor={(item, index) => index.toString()}
                renderItem={ScreenshotItem}
              />
            </View>

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
                <FlatList
                  columnWrapperStyle={tailwind('justify-between')}
                  data={gameData.stores}
                  numColumns={2}
                  renderItem={StoreLink}
                />
              </View>
            </View>

            <View style={tailwind('mx-4 mb-6')}>
              <Text
                style={{
                  ...tailwind('text-lg text-white mb-1.5'),
                  fontFamily: 'Poppins_700Bold',
                }}
              >
                About
              </Text>

              <Text
                style={{
                  ...tailwind('text-white leading-5'),
                  fontFamily: 'Poppins_400Regular',
                }}
              >
                {gameData.description_raw}
              </Text>
            </View>

            <View
              style={tailwind('mx-4 mb-6 flex-row justify-between flex-wrap')}
            >
              <View style={{ ...tailwind('mb-6'), width: '46%' }}>
                <Text
                  style={{
                    ...tailwind('text-white text-opacity-40'),
                    fontFamily: 'Poppins_500Medium',
                  }}
                >
                  Platforms
                </Text>
                <View style={tailwind('mt-2 flex-row flex-wrap')}>
                  {gameData.parent_platforms.map((p, index) => (
                    <Text
                      style={{
                        ...tailwind('text-white underline'),
                        marginRight:
                          index === gameData.parent_platforms.length - 1
                            ? 0
                            : 5,
                        marginBottom:
                          index === gameData.parent_platforms.length - 1
                            ? 0
                            : 5,
                      }}
                    >
                      {p.platform.name}
                      {index === gameData.parent_platforms.length - 1
                        ? ''
                        : ','}
                    </Text>
                  ))}
                </View>
              </View>

              {gameData.metacritic ? (
                <View style={{ ...tailwind('mb-6'), width: '46%' }}>
                  <Text
                    style={{
                      ...tailwind('text-white text-opacity-40'),
                      fontFamily: 'Poppins_500Medium',
                    }}
                  >
                    Metascore
                  </Text>
                  <View style={tailwind('mt-2 flex-row flex-wrap')}>
                    <View
                      style={{
                        ...tailwind('flex px-1 border rounded'),
                        borderColor: getScoreColor(gameData.metacritic),
                      }}
                    >
                      <Text
                        style={{
                          color: getScoreColor(gameData.metacritic),
                          fontFamily: 'Poppins_700Bold',
                        }}
                      >
                        {gameData.metacritic}
                      </Text>
                    </View>
                  </View>
                </View>
              ) : null}

              {gameData.genres ? (
                <View style={{ ...tailwind('mb-6'), width: '46%' }}>
                  <Text
                    style={{
                      ...tailwind('text-white text-opacity-40'),
                      fontFamily: 'Poppins_500Medium',
                    }}
                  >
                    Genres
                  </Text>
                  <View style={tailwind('mt-2 flex-row flex-wrap')}>
                    {gameData.genres.map((g, index) => (
                      <Text
                        style={{
                          ...tailwind('text-white underline'),
                          marginRight:
                            index === gameData.genres.length - 1 ? 0 : 5,
                          marginBottom:
                            index === gameData.genres.length - 1 ? 0 : 5,
                        }}
                      >
                        {g.name}
                        {index === gameData.genres.length - 1 ? '' : ','}
                      </Text>
                    ))}
                  </View>
                </View>
              ) : null}

              {gameData.released ? (
                <View style={{ ...tailwind('mb-6'), width: '46%' }}>
                  <Text
                    style={{
                      ...tailwind('text-white text-opacity-40'),
                      fontFamily: 'Poppins_500Medium',
                    }}
                  >
                    Release date
                  </Text>
                  <View style={tailwind('mt-2 flex-row flex-wrap')}>
                    <Text style={tailwind('text-white')}>
                      {moment(gameData.released).format('MMM D, YYYY')}
                    </Text>
                  </View>
                </View>
              ) : null}

              {gameData.updated ? (
                <View style={{ ...tailwind('mb-6'), width: '46%' }}>
                  <Text
                    style={{
                      ...tailwind('text-white text-opacity-40'),
                      fontFamily: 'Poppins_500Medium',
                    }}
                  >
                    Updated
                  </Text>
                  <View style={tailwind('mt-2 flex-row flex-wrap')}>
                    <Text style={tailwind('text-white')}>
                      {moment(gameData.updated).format('MMM D, YYYY')}
                    </Text>
                  </View>
                </View>
              ) : null}

              {gameData.playtime ? (
                <View style={{ ...tailwind('mb-6'), width: '46%' }}>
                  <Text
                    style={{
                      ...tailwind('text-white text-opacity-40'),
                      fontFamily: 'Poppins_500Medium',
                    }}
                  >
                    Average playtime
                  </Text>
                  <View style={tailwind('mt-2 flex-row flex-wrap')}>
                    <Text style={tailwind('text-white')}>
                      {gameData.playtime} hour
                      {gameData.playtime > 1 ? 's' : null}
                    </Text>
                  </View>
                </View>
              ) : null}

              {gameData.website ? (
                <View style={{ ...tailwind('mb-6'), width: '46%' }}>
                  <Text
                    style={{
                      ...tailwind('text-white text-opacity-40'),
                      fontFamily: 'Poppins_500Medium',
                    }}
                  >
                    Website
                  </Text>
                  <View style={tailwind('mt-2 flex-row flex-wrap')}>
                    <TouchableOpacity
                      onPress={() => Linking.openURL(gameData.website)}
                    >
                      <Text style={tailwind('text-white underline')}>
                        {gameData.website}
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              ) : null}

              {gameData.achievements_count ? (
                <View style={{ ...tailwind('mb-6'), width: '46%' }}>
                  <Text
                    style={{
                      ...tailwind('text-white text-opacity-40'),
                      fontFamily: 'Poppins_500Medium',
                    }}
                  >
                    Achievements
                  </Text>
                  <View style={tailwind('mt-2 flex-row flex-wrap')}>
                    <Text style={tailwind('text-white')}>
                      {gameData.achievements_count}
                    </Text>
                  </View>
                </View>
              ) : null}

              {gameData.esrb_rating ? (
                <View style={{ ...tailwind('mb-6'), width: '46%' }}>
                  <Text
                    style={{
                      ...tailwind('text-white text-opacity-40'),
                      fontFamily: 'Poppins_500Medium',
                    }}
                  >
                    ESRB Rating
                  </Text>
                  <View style={tailwind('mt-2 flex-row flex-wrap')}>
                    <Text style={tailwind('text-white')}>
                      {gameData.esrb_rating.name}
                    </Text>
                  </View>
                </View>
              ) : null}
            </View>
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
