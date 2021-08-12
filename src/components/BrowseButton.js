import React from 'react'
import { TouchableOpacity, Text, View } from 'react-native'
import { Ionicons, FontAwesome5, MaterialIcons } from '@expo/vector-icons'
import { tailwind } from '../../tailwind'
import { useFonts, Poppins_400Regular } from '@expo-google-fonts/poppins'

const BrowseButton = ({ iconProvider, icon, title }) => {
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

  return (
    <TouchableOpacity style={tailwind('flex flex-col w-24 items-center mr-4')}>
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
