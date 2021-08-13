import 'react-native-gesture-handler'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import HomeScreen from './src/screens/HomeScreen'
import { SearchProvider } from './src/context/SearchContext'
import SearchScreen from './src/screens/SearchScreen'

const Stack = createStackNavigator()

const AppStack = () => {
  return (
    <SearchProvider>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Search" component={SearchScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </SearchProvider>
  )
}

export default AppStack
