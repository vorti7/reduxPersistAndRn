import React from 'react';
import {StyleSheet, View} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { ScreenName, Screens } from '../../screens'

export type Props = {
};

const RootStack = createNativeStackNavigator();

const RootNavigator = ({}: Props) => {
    return (
        <NavigationContainer>
          <RootStack.Navigator screenOptions={{headerShown:false}}>
            <RootStack.Screen name={ScreenName.HOME} component={Screens.HOME} />
            <RootStack.Screen name={ScreenName.WALLET_MANAGEWALLET} component={Screens.WALLET_MANAGEWALLET} />
            <RootStack.Screen name={ScreenName.WALLET_MANAGETOKEN} component={Screens.WALLET_MANAGETOKEN} />
          </RootStack.Navigator>
        </NavigationContainer>
    )
};

const styles = StyleSheet.create({
});

export default RootNavigator;