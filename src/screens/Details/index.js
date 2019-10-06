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
const { height, width } = Dimensions.get("window");

export default function Details() {

    return (
        <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'center' }} >
            <View style={{ width: width, height: height }}>
                <View style={{ width: width * 0.2, alignItems: 'center' }}>
                    <Text>0</Text>
                   
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
