import React, { useContext } from 'react'
import { TouchableOpacity, Text, View } from 'react-native'
import { Ionicons, FontAwesome5, MaterialIcons } from '@expo/vector-icons'
import { tailwind } from '../../tailwind'
import { useFonts, Poppins_400Regular } from '@expo-google-fonts/poppins'
import fetchData from '../api/rawg'
import { SearchContext } from '../context/SearchContext'
import ControllerIcon from './icons/ControllerIcon'
import StoreIcon from './icons/StoreIcon'
import CollectionIcon from './icons/CollectionIcon'
import ReviewIcon from './icons/ReviewIcon'
import GenreIcon from './icons/GenreIcon'
import CreatorIcon from './icons/CreatorIcon'
import TagIcon from './icons/TagIcon'
import DeveloperIcon from './icons/DeveloperIcon'
import PublisherIcon from './icons/PublisherIcon'
import { useNavigation } from '@react-navigation/native';

const BrowseButton = ({ iconProvider, icon, title, query }) => {
  const { text, result } = useContext(SearchContext)
  const [searchResult, setSearchResult] = result
  const [searchText, setSearchText] = text
  const navigation = useNavigation();

  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
  })

  const renderIcon = () => {
    switch (icon) {
      case 'controller':
        return <ControllerIcon size={32} />
      case 'store':
        return <StoreIcon size={28} />
      case 'collection':
        return <CollectionIcon size={28} />
      case 'review':
        return <ReviewIcon size={28} />
      case 'genre':
        return <GenreIcon size={28} />
      case 'creator':
        return <CreatorIcon size={28} />
      case 'tag':
        return <TagIcon size={28} />
      case 'developer':
        return <DeveloperIcon size={28} />
      case 'publisher':
        return <PublisherIcon size={28} />
      default:
        return <Text style={tailwind('text-white')}>{icon}</Text>
    }
  }

  const handlePress = async () => {
    try {
      const data = await fetchData(query, '?')
      await setSearchResult(data)
      navigation.navigate('Search', { filters: false, card: 'category' })
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

export default React.memo(BrowseButton)
