import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import PhoneNumberScreen from './screens/PhoneNumberScreen';
import CodeScreen from './screens/CodeScreen';
import CabinetScreen from './screens/CabinetScreen';


const Stack = createStackNavigator();

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='PhoneNumber'>
        <Stack.Screen
          name="PhoneNumber" 
          component={PhoneNumberScreen} 
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Code"
          component={CodeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Cabinet"
          component={CabinetScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
