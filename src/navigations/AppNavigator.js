import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { Platform } from 'react-native';
import { getLatestAppTheme } from '../theme/themes';
import { NetworkStatus } from '../components/core';
import { setTopLevelNavigator } from '../utils/CommonUtils';
import SplashScreen from '../screens/auth/splashScreen/SplashScreen';
import MigrantsListingScreen from '../screens/home/migrantsListing/MigrantsListingScreen';
import MigrantsDetailScreen from '../screens/home/migrantsDetails/MigrantsDetailScreen';
import MigrantsFilters from '../screens/home/filter/MigrantsFilters';
import Tabs from './tab/TabNavigator';
import WebViewScreen from '../screens/home/webviewScreen/WebViewScreen';

import { useSelector } from 'react-redux';

const title = text =>
  Platform.select({ web: `MapView | ${text}`, default: text });
const Stack = createStackNavigator();

export const WebNavigatorLinking = {
  config: {
    screens: {
      HomeScreen: '',
    },
  },
};

const AppNavigator = () => {
  const { theme } = useSelector(state => state.ThemeReducer);
  return (
    <NavigationContainer
      ref={refs => {
        setTopLevelNavigator(refs)
      }}
      theme={getLatestAppTheme(theme)}
      >
      <NetworkStatus />
      <Stack.Navigator
        initialRouteName='SplashScreen'
        screenOptions={{ headerShown: false }}>
        <Stack.Screen 
          name="Tabs" 
          component={Tabs} 
        />
        <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          options={{ title: title('Splash') }}
        />
        <Stack.Screen
          name="MigrantsListingScreen"
          component={MigrantsListingScreen}
          options={{ title: title('MigrantsListing') }}
        />
        <Stack.Screen
          name="MigrantsDetailScreen"
          component={MigrantsDetailScreen}
          options={{ title: title('MigrantsDetail') }}
        />
        <Stack.Screen
          name="MigrantsFilters"
          component={MigrantsFilters}
          options={{ title: title('MigrantsFilters') }}
        />
        <Stack.Screen
          name="WebViewScreen"
          component={WebViewScreen}
          options={{ title: title('WebViewScreen') }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
