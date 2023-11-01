/* eslint-disable react/no-unstable-nested-components */
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

import React from 'react';
import Home from '../../screens/home';
import ChatsNavigator from '../chatsNavigation';
import Chat from '../../screens/chat';
import {TabTitle} from './styles';

export default function InboxStack() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          title: 'Inbox',
          headerRight: () => <ChatsNavigator />,
          headerLeft: () => <TabTitle>Inbox</TabTitle>,
          headerTitle: '',
          headerStyle: {backgroundColor: '#F4F4F4'},
          headerShadowVisible: false,
        }}
      />

      <Stack.Screen
        name="Chat"
        component={Chat}
        options={{
          headerBackTitle: 'Back to inbox',
          headerTitle: '',
          headerRight: () => <ChatsNavigator isChat />,
          headerTintColor: '#6B6B6B',
          headerShadowVisible: false,
        }}
      />
    </Stack.Navigator>
  );
}
