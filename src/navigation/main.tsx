import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { hasNotch } from 'react-native-device-info';
import Home from '../screens/Home';
import Plans from '../screens/Plans';
import Icon from '../components/CustomIcon';
import { colors, fontFamily } from '../utils';

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        style: {
          elevation: 5,
          shadowRadius: 5,
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 5 },
          shadowOpacity: 0.3,
          borderTopWidth: 1,
          borderTopColor: colors.WHITE,
          paddingTop: 15,
          height: hasNotch() ? 90 : 65,
        },
        showLabel: true,
        activeTintColor: colors.TEAL,
        inactiveTintColor: colors.OSLO_GRAY,
        labelStyle: {
          fontFamily: fontFamily.GELION_REGULAR,
          fontSize: 12,
          lineHeight: 16,
          marginBottom: hasNotch() ? 0 : 5,
        },
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="home" color={color} size={24} />
          ),
        }}
      />
      <Tab.Screen
        name="Plans"
        component={Plans}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="plans" color={color} size={24} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigation;
