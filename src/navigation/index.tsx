import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AuthStack from './auth';
import TabNavigation from './main';
import YourPlans from '../screens/YourPlans';
import DebitCard from '../screens/DebitCard';
import ConfirmAmount from '../screens/ConfirmAmount';
import AddToPlan from '../screens/AddToPlan';

const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Auth" headerMode="none">
        <Stack.Screen name="Auth" component={AuthStack} />
        <Stack.Screen name="Main" component={TabNavigation} />
        <Stack.Screen name="DebitCard" component={DebitCard} />
        <Stack.Screen
          options={() => ({
            gestureDirection: 'horizontal-inverted',
          })}
          name="YourPlans"
          component={YourPlans}
        />
        <Stack.Screen name="ConfirmAmount" component={ConfirmAmount} />
        <Stack.Screen name="AddToPlan" component={AddToPlan} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
