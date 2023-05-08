import React from 'react';
import {StyleSheet, View, Button} from 'react-native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeTabWallet from './homeTabWallet';
import HomeTabAction from './homeTabAction'
import HomeTabWhole from'./homeTabWhole'

const Tab = createBottomTabNavigator();

export type Props = {
};


const HomeScreen = ({navigation}: Props) => {
    return (
        <Tab.Navigator screenOptions={{headerShown:false}}>
          <Tab.Screen name="HomeTabWallet" component={HomeTabWallet} />
          <Tab.Screen name="HomeTabAction" component={HomeTabAction} />
          <Tab.Screen name="HomeTabWhole" component={HomeTabWhole} />
        </Tab.Navigator>
    )
};

const styles = StyleSheet.create({
});

export default HomeScreen;