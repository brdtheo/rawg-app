import 'react-native-gesture-handler'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import HomeScreen from './src/screens/HomeScreen'
import { SearchProvider } from './src/context/SearchContext'
import { HomeProvider } from './src/context/HomeContext'
import SearchScreen from './src/screens/SearchScreen'
import DetailScreen from './src/screens/DetailScreen'

const Stack = createStackNavigator()

const AppStack = () => {
  return (
    <HomeProvider>
      <SearchProvider>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerShown: false,
            }}
          >
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Search" component={SearchScreen} />
            <Stack.Screen name="Detail" component={DetailScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </SearchProvider>
    </HomeProvider>
  )
}

export default AppStack
