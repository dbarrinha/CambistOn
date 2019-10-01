import React from 'react';
import { View, Text, Dimensions } from 'react-native';
import { CardSugestao, ThumbSugestao, ContainerSugestao, Title, Description } from './styles';
import { FlatList } from 'react-native-gesture-handler';
const { height, width } = Dimensions.get("window");

export default function Sugestoes() {
    let sugestoes = [
        { nome: "Notebook intel i5", descricao: "produto novo" },
        { nome: "Moto g5plus", descricao: "na caixa" },
        { nome: "Iphone 8 plus", descricao: "Acompanha carregador" },
    ]

    const renderSugestao = (item) => {
        return (
            <CardSugestao>
                <ThumbSugestao src={{ uri: 'https://placeimg.com/140/140/any' }} />
                <View style={{ padding: 5 }}>
                    <Title>{item.item.nome}</Title>
                    <Description>R$ 15</Description>
                </View>
            </CardSugestao>
        )
    }
    return (
        <ContainerSugestao >
            <View style={{margin: 5}}>
                <Title>Sugestões para você</Title>
            </View>
            <FlatList
                horizontal
                data={sugestoes}
                extraData={sugestoes}
                renderItem={(item) => renderSugestao(item)}
            />
        </ContainerSugestao>
    );
}
