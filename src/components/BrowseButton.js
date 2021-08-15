import React, { useContext } from 'react'
import { TouchableOpacity, Text, View } from 'react-native'
import { Ionicons, FontAwesome5, MaterialIcons } from '@expo/vector-icons'
import { tailwind } from '../../tailwind'
import { useFonts, Poppins_400Regular } from '@expo-google-fonts/poppins'
import fetchData from '../api/rawg'
import { SearchContext } from '../context/SearchContext'

const BrowseButton = ({ iconProvider, icon, title, query, navigation }) => {
  const { text, result } = useContext(SearchContext)
  const [searchResult, setSearchResult] = result
  const [searchText, setSearchText] = text

  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
  })

  const renderIcon = () => {
    switch (iconProvider) {
      case 'Ionicons':
        return <Ionicons name={icon} size={32} color="white" />
      case 'FontAwesome5':
        return <FontAwesome5 name={icon} size={32} color="white" />
      case 'MaterialIcons':
        return <MaterialIcons name={icon} size={32} color="white" />
      default:
        return <Text style={tailwind('text-white')}>{iconProvider}</Text>
    }
  }

  const handlePress = async () => {
    try {
      const data = await fetchData(query, '?')
      await setSearchResult(data)
      navigation.navigate('Search', { filters: false, card: 'category' })

      console.log(data)
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <TouchableOpacity
      style={tailwind('flex flex-col w-24 items-center mr-4')}
      onPress={() => handlePress()}
    >
      <View
        style={tailwind(
          'flex flex-col justify-center items-center bg-browse-grey w-full h-24 rounded-2xl'
        )}
      >
        {renderIcon()}
      </View>
      {fontsLoaded ? (
        <Text
          style={{
            ...tailwind('text-white mt-2 text-sm'),
            fontFamily: 'Poppins_400Regular',
          }}
        >
          {title}
        </Text>
      ) : null}
    </TouchableOpacity>
  )
}

export default BrowseButton
