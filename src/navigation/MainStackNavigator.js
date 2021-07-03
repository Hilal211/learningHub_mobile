import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Home from '../screens/Home'
import Attendance from '../screens/Attendance'
import Report from '../screens/Report'


const Stack = createStackNavigator();

function MainStackNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home' screenOptions={{
          gestureEnabled: true
        }}>

        <Stack.Screen name='Home'
        component={Home} 
        options={{ title: 'Home Screen' }}/>

        <Stack.Screen
          name='Attendance'
          component={Attendance}
          options={{ title: 'Attendance Screen' }}
        />

<Stack.Screen
          name='Report'
          component={Report}
          options={{ title: 'Report Screen' }}
        />

      </Stack.Navigator>

    </NavigationContainer>
  )
}

export default MainStackNavigator