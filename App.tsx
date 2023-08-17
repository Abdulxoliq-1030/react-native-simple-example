import React from 'react';
import { Text, View } from 'react-native';
import Splash from './screens/Splash';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Registration from './screens/Registration';

interface AppProps { }

const Stack = createNativeStackNavigator();

const App: React.FC<AppProps> = () => {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Home' screenOptions={{ headerShown: false }}>
          <Stack.Screen
            name="Home"
            component={Splash}
          />
          <Stack.Screen
            name="Register"
            component={Registration}

          />
        </Stack.Navigator>
      </NavigationContainer></>
  )
}

export default App;