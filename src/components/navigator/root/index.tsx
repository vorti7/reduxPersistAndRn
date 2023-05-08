import React from 'react';
import {StyleSheet, View} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Screens from '../../screens'

export type Props = {
};

const RootStack = createNativeStackNavigator();

const RootNavigator = ({}: Props) => {
    return (
        <NavigationContainer>
          <RootStack.Navigator>
            {
              Screens.map((aScreen) => {
                return <RootStack.Screen name={aScreen.screenName} component={aScreen.screen} />
              })
            }
          </RootStack.Navigator>
        </NavigationContainer>
    )
};

const styles = StyleSheet.create({
});

export default RootNavigator;