import React, { useState } from 'react'
import { View, StyleSheet } from 'react-native'
import RNPickerSelect from 'react-native-picker-select'
import { tailwind } from '../../tailwind'
import { useFonts, Poppins_400Regular } from '@expo-google-fonts/poppins'
import { Ionicons } from '@expo/vector-icons'

const RawgSelect = ({ placeholder }) => {
  const [selectedLanguage, setSelectedLanguage] = useState()
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
  })

  return (
    <RNPickerSelect
      Icon={() => {
        return (
          <Ionicons
            name="chevron-down"
            size={16}
            color="rgba(255,255,255,0.6)"
          />
        )
      }}
      placeholder={{
        label: placeholder,
        value: null,
        color: 'white',
      }}
      style={{
        ...pickerSelectStyles,
        placeholder: {
          fontSize: 12,
          fontFamily: 'Poppins_400Regular',
          color: 'rgba(255,255,255,1)',
        },
        iconContainer: {
          top: 13,
          right: 12,
        },
      }}
      onValueChange={(value) => console.log(value)}
      items={[
        { label: 'Football', value: 'football' },
        { label: 'Baseball', value: 'baseball' },
        { label: 'Hockey', value: 'hockey' },
      ]}
    />
  )
}

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    backgroundColor: '#262626',
    fontSize: 12,
    fontFamily: 'Poppins_400Regular',
    padding: 12,
    borderRadius: 14,
    color: 'white',
    paddingRight: 30, // to ensure the text is never behind the icon
  },
  inputAndroid: {
    backgroundColor: '#262626',
    fontSize: 12,
    fontFamily: 'Poppins_400Regular',
    padding: 12,
    borderRadius: 14,
    color: 'white',
    paddingRight: 30, // to ensure the text is never behind the icon
  },
})

export default RawgSelect
