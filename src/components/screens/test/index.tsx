import React, { useState } from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';

import Swiper from 'react-native-swiper'

export type Props = {
};

const FirstPage = () => {
    return (
        <View
            style={{
                flex:1,
            }}
        >
            <Text>
                내 자산을 안전하게 보관하세요
            </Text>
        </View>
    )
}

const SecondPage = () => {
    return (
        <View
            style={{
                flex:1,
            }}
        >
            <Text>
                내가 보유한 NFT로 프로필을 설정하세요
            </Text>
        </View>
    )
}

const ThirdPage = () => {
    return (
        <View
            style={{
                flex:1,
            }}
        >
            <Text>
                내 자산을 간편하게 송금하세요
            </Text>
        </View>
    )
}


const TestScreen = ({}: Props) => {

    return (
        <View
            style={{
                flex:1
            }}
        >
            <Swiper
                style={{
                }}
                dot={
                    <View
                        style={{
                            marginHorizontal:20,
                            width:30,
                            height:30,
                            backgroundColor:"white"
                        }}
                    />
                }
                activeDot={
                    <View
                        style={{
                            marginHorizontal:20,
                            width:60,
                            height:30,
                            backgroundColor:"black"
                        }}
                    />
                }
            >
                <FirstPage/>
                <SecondPage/>
                <ThirdPage/>
            </Swiper>
        </View>
    )
};

const styles = StyleSheet.create({
});

export default TestScreen;