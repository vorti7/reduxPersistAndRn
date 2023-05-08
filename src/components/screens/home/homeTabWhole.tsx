import React from 'react';
import {StyleSheet, View, SafeAreaView, SectionList, Text, TouchableOpacity} from 'react-native';

import { ScreenName } from '../../screens'

export type Props = {
};

const HomeTabWhole = ({navigation}: Props) => {

    const SECTIONDATA = [
        {
            title: '지갑',
            data: [
                {
                    label : '지갑 관리',
                    navigation : ScreenName.WALLET_MANAGEWALLET
                },
                {
                    label : '토큰 관리',
                    navigation : ScreenName.WALLET_MANAGETOKEN
                }
            ]
        },
        {
            title: '자산', 
            data: [
                {
                    label : '보내기',
                    navigation : ''
                },
                {
                    label : '받기',
                    navigation : ''
                },
                {
                    label : 'NFT 전송',
                    navigation : ''
                },
                {
                    label : '거래내역',
                    navigation : ''
                }
            ]
        },
        {
            title: '보안', 
            data: [
                {
                    label : '암호 및 생체 인증',
                    navigation : ''
                },
                {
                    label : '연결된 사이트 관리',
                    navigation : ''
                }
            ]
        },
        {
            title: '설정', 
            data: [
                {
                    label : '기준 통화',
                    navigation : ''
                },
                {
                    label : '언어',
                    navigation : ''
                },
                {
                    label : '알림 설정',
                    navigation : ''
                },
                {
                    label : 'MetaMask 호환',
                    navigation : ''
                }
            ]
        },
        {
            title: '지원', 
            data: [
                {
                    label : '이용 가이드',
                    navigation : ''
                },
                {
                    label : '웹사이트',
                    navigation : ''
                },
                {
                    label : '문의 및 피드백',
                    navigation : ''
                }
            ]
        },
    ];

    return (
        <View
            style={{
                flex:1
            }}
        >
            <SafeAreaView
                style={{
                    flex:1
                }}
            >
                <SectionList
                    sections={SECTIONDATA}
                    keyExtractor={(item, index) => item.label + index}
                    renderItem={({item}) => (
                        <TouchableOpacity
                            onPress={() => {
                                if(item.navigation){
                                    navigation.navigate(item.navigation)
                                }
                            }}
                        >
                            <View style={styles.item}>
                                <Text style={styles.title}>{item.label}</Text>
                            </View>
                        </TouchableOpacity>
                    )}
                    renderSectionHeader={({section: {title}}) => (
                        <Text style={styles.header}>{title}</Text>
                    )}
                />
            </SafeAreaView>
        </View>
    )
};

const styles = StyleSheet.create({
    item:{

    },
    title:{

    },
    header:{
        fontSize: 32,
    }
});

export default HomeTabWhole;