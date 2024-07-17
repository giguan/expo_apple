import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import MainSettings from './MainSettings';
import SearchScreen from './SearchScreen';
import BookingScreen from './BookingScreen';
import ProfileScreen from './ProfileScreen';

const Tab = createBottomTabNavigator();

function SettingsScreen() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;
          if (route.name === 'Main') {
            iconName = 'home-outline';
          } else if (route.name === 'Search') {
            iconName = 'search-outline';
          } else if (route.name === 'Booking') {
            iconName = 'calendar-outline';
          } else if (route.name === 'Profile') {
            iconName = 'person-outline';
          }
          return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarStyle: { backgroundColor: '#16171d' },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
        headerStyle: { backgroundColor: '#16171d' },
        headerTintColor: 'white',
      })}
    >
      <Tab.Screen name="Main" component={MainSettings} options={{ tabBarLabel: '홈', headerShown: false }} />
      <Tab.Screen name="Search" component={SearchScreen} options={{ tabBarLabel: '무료슬릇', headerShown: false }} />
      <Tab.Screen name="Booking" component={BookingScreen} options={{ tabBarLabel: '스코어', headerShown: false }} />
      <Tab.Screen name="Profile" component={ProfileScreen} options={{ tabBarLabel: '내정보', headerShown: false }} />
    </Tab.Navigator>
  );
}

export default SettingsScreen;
