import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import DashboardScreen from '../screens/DashboardScreen';

const AppNavigation = () => {
  const stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <stack.Navigator
        initialRouteName="DashboardScreen"
        screenOptions={{headerShown: false}}>
        <stack.Screen name="DashboardScreen" component={DashboardScreen} />
      </stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
