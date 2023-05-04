import React from 'react';
import {StyleSheet, View} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { HomeScreen } from '../../screens'

export type Props = {
};

const RootStack = createNativeStackNavigator();

const RootNavigator = ({}: Props) => {
    return (
        <NavigationContainer>
          <RootStack.Navigator>
            <RootStack.Screen name="Home" component={HomeScreen} />
          </RootStack.Navigator>
        </NavigationContainer>
    )
};

const styles = StyleSheet.create({
});

export default RootNavigator;