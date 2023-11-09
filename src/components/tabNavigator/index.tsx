/* eslint-disable react/no-unstable-nested-components */

import React from 'react';
import InboxStack from '../inboxNavigator';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import CommingSoon from '../../screens/commingSoon';

//@ts-ignore
import Home from '../../assets/home.svg';
//@ts-ignore
import Pay from '../../assets/pay.svg';
//@ts-ignore
import Inbox from '../../assets/inbox.svg';
//@ts-ignore
import Jobs from '../../assets/jobs.svg';
//@ts-ignore
import More from '../../assets/more.svg';

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
              return <Home />;
            case 'Pay':
              return <Pay />;
            case 'Inbox':
              return <Inbox />;

            case 'Jobs':
              return <Jobs />;

            case 'More':
              return <More />;

            default:
              return null;
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
