import * as React from 'react';
import SearchScreen from './src/screens/SearchScreen'


import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={SearchScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;