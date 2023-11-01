/* eslint-disable react/no-unstable-nested-components */

import React from 'react';
import {Image} from 'react-native';
import InboxStack from '../inboxNavigator';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import CommingSoon from '../../screens/commingSoon';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator
      initialRouteName="Inbox"
      screenOptions={({route}) => ({
        tabBarActiveBackgroundColor: '#F0F0F0',
        tabBarActiveTintColor: 'black',
        tabBarItemStyle: {borderRadius: 10, padding: 4},
        tabBarIcon: ({}) => {
          switch (route.name) {
            case 'Home':
              return <Image source={require('../../assets/home-icon.png')} />;
            case 'Pay':
              return <Image source={require('../../assets/pay-icon.png')} />;
            case 'Inbox':
              return <Image source={require('../../assets/inbox-icon.png')} />;
            case 'Jobs':
              return <Image source={require('../../assets/jobs-icon.png')} />;
            case 'More':
              return <Image source={require('../../assets/more-icon.png')} />;

            default:
              return <Image source={require('../../assets/home-icon.png')} />;
          }
        },
      })}>
      <Tab.Screen name="Home" component={CommingSoon} />
      <Tab.Screen name="Pay" component={CommingSoon} />
      <Tab.Screen
        name="Inbox"
        component={InboxStack}
        options={{headerShown: false}}
      />
      <Tab.Screen name="Jobs" component={CommingSoon} />
      <Tab.Screen name="More" component={CommingSoon} />
    </Tab.Navigator>
  );
}
