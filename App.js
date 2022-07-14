import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DrawerNavigator from './src/Navigators/Drawer'
import Authentication from './src/Navigators/AuthStack';
const Stack=createNativeStackNavigator()
const App = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }} >

          {/* <>
            <Stack.Screen name="MainApp" component={DrawerNavigator} />
          </> */}

          <>
            <Stack.Screen name="Authentication" component={Authentication} />
          </>


      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
