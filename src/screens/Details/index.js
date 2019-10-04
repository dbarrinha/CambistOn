import React from 'react';
import { View, Text, Dimensions } from 'react-native';
import {
    Thumb,
    Card,
    CardInfo,
    Title,
    Description,
    TextFooter
} from './styles'
import Slider from '@react-native-community/slider';
const { height, width } = Dimensions.get("window");

export default function Details() {

    return (
        <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'center' }} >
            <View style={{ width: width, height: height }}>
                <View style={{ width: width * 0.2, alignItems: 'center' }}>
                    <Text>0</Text>
                    <Slider
                        style={{ width: 200, height: 40, transform: [{rotate: '90deg'}] }}
                        minimumValue={0}
                        maximumValue={1}
                        minimumTrackTintColor="#FFFFFF"
                        maximumTrackTintColor="#000000"
                    />
                    <Text>1</Text>
                </View>
                <View style={{ flexDirection: 'column', width: width * 0.8 }}>
                    <Text>teste1</Text>
                    <Text>teste2</Text>
                    <Text>teste3</Text>
                </View>
            </View>
            <Text>TESTE</Text>
        </View>
    );
}
