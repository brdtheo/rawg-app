import React, { useState } from 'react'
import { View, StyleSheet } from 'react-native'
import RNPickerSelect from 'react-native-picker-select'
import { tailwind } from '../../tailwind'
import { useFonts, Poppins_400Regular } from '@expo-google-fonts/poppins'
import { Ionicons } from '@expo/vector-icons'

const RawgSelect = ({ placeholder, items }) => {
  const [selectValue, setSelectValue] = useState('')
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
            color={selectValue ? 'rgba(0,0,0,0.6)' : 'rgba(255,255,255,0.6)'}
          />
        )
      }}
      placeholder={{
        label: placeholder,
        value: null,
        color: 'white',
      }}
      style={{
        inputIOS: {
          backgroundColor: selectValue ? 'white' : '#262626',
          fontSize: 12,
          fontFamily: 'Poppins_400Regular',
          padding: 12,
          borderRadius: 14,
          color: selectValue ? '#262626' : 'white',
          paddingRight: 30,
        },
        inputAndroid: {
          backgroundColor: selectValue ? 'white' : '#262626',
          fontSize: 12,
          fontFamily: 'Poppins_400Regular',
          padding: 12,
          borderRadius: 14,
          color: selectValue ? '#262626' : 'white',
          paddingRight: 30,
        },
        placeholder: {
          fontSize: 12,
          fontFamily: 'Poppins_400Regular',
          color: 'rgba(255,255,255,.6)',
        },
        iconContainer: {
          top: 13,
          right: 12,
        },
      }}
      onValueChange={(value) => console.log(value)}
      items={items}
      value={selectValue}
      onValueChange={(value, index) => setSelectValue(value)}
    />
  )
}

export default RawgSelect
