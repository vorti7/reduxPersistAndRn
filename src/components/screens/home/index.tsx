import React from 'react';
import {StyleSheet, View, Button} from 'react-native';

export type Props = {
};


const HomeScreen = ({navigation}: Props) => {
    return (
        <View>
            <Button
                title='Go Test'
                onPress={() => {
                    navigation.navigate("Test")
                }}
            />
        </View>
    )
};

const styles = StyleSheet.create({
});

export default HomeScreen;