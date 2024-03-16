import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import { ResizeValue } from '../../theme/styles';
import fonts from '../../assets/fonts';
import icons from '../../assets/icons';
import MigrantsListingScreen from '../../screens/home/migrantsListing/MigrantsListingScreen';
import TheBookScreen from '../../screens/home/theBook/TheBookScreen';
import ExhibitionsScreen from '../../screens/home/exhibitions/ExhibitionsScreen';

// import { EventEmitterName } from '../../utils/Constants';
// import { EventRegister } from 'react-native-event-listeners'

const Tab = createBottomTabNavigator();

const MyTabBar = ({ state, descriptors, navigation }) => {
  return (
    <View
      style={[
        styles.footerHolder,
        {
          backgroundColor: 'white',
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 3 },
          shadowOpacity: 0.27,
          shadowRadius: 4.65,
          elevation: 6,
        },
      ]}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const isFocused = state.index === index;
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
              ? options.title
              : route.name;


        let iconName = '';
        let iconSelectedName = '';
        if (route.name === 'Stories') {
          iconName = icons.icEventsTabUnSelected;
          iconSelectedName = icons.icStoriesTabSelected;
        } else if (route.name === 'The Book') {
          iconName = icons.icLifeBookTabUnSelected;
          iconSelectedName = icons.icLifeBookTabSelected;
        } else if (route.name === 'Exhibitions') {
          iconName = icons.icEventsTabUnSelected;
          iconSelectedName = icons.icEventsTabSelected;
        }

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }

          // EventRegister.emit(EventEmitterName.tabSelection, route.name)

        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            key={index}
            accessibilityRole="button"
            accessibilityStates={isFocused ? ['selected'] : []}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={[styles.selectedItem]}>
            <Image
              source={isFocused ? iconSelectedName : iconName}
              style={{
                height: ResizeValue(30),
                width: ResizeValue(30),
                // tintColor: isFocused ? '#1E5AA3' : 'black',
              }}
            />
            <Text
              style={[
                styles.footerText,
                { color: isFocused ? '#1E5AA3' : 'black', textAlign: 'center' },
              ]}
              children={label === "Migrants Life" ? "Migrants\nLife" : label}
            />

          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      backBehavior="history"
      tabBar={props => <MyTabBar {...props} />}
      screenOptions={({ route }) => ({
        headerShown: false,
      })}>
      <Tab.Screen name="Stories" component={MigrantsListingScreen} />
      <Tab.Screen name="The Book" component={TheBookScreen} />
      <Tab.Screen name="Exhibitions" component={ExhibitionsScreen} />
    </Tab.Navigator>
  );
};

export const styles = StyleSheet.create({
  footerHolder: {
    flexDirection: 'row',
    height: ResizeValue(70),
    justifyContent: 'center',
  },
  selectedItem: {
    flex: 1,
    alignItems: 'center',
    paddingTop: ResizeValue(5),
    marginHorizontal: ResizeValue(1),
  },
  footerText: {
    marginTop: ResizeValue(5),
    fontSize: ResizeValue(9),
    paddingBottom: ResizeValue(10),
    // textTransform: 'uppercase',
    ...fonts.FONT_600,
  },
});
