import React, { useContext } from 'react';
import { View, Text } from 'react-native';
import { NavigationContext } from 'react-navigation';
import {
  Thumb,
  Card,
  CardInfo,
  Title,
  Description,
  TextFooter,
} from './styles'
import { colors } from 'config/colors'
import { FlatList } from 'react-native-gesture-handler';


export default Home = () => {
  let produtos = [
    {nome: "Notebook intel i5", descricao: "produto novo"},
    {nome: "Moto g5plus", descricao: "na caixa"},
    {nome: "Iphone 8 plus", descricao: "Acompanha carregador"},
  ]

  const renderCard = () => {
    return (
      <Card>
        <Thumb
          src={{ uri: 'https://placeimg.com/140/140/any' }}
        />
        <CardInfo>
          <Title>Título Exemplo</Title>
          <Description>
            Descrição do produto, loree ipsun xablau
          </Description>
          <TextFooter>
            30 setembro 13:10, Centro
          </TextFooter>
        </CardInfo>
      </Card>
    )
  }

  return (
    <View style={{ flex: 1, backgroundColor: colors.colorBackground, paddingVertical: 5 }}>
      <FlatList
        data={produtos}
        extraData={produtos}
        renderItem={(item)=>renderCard(item)}
      />
    </View>
  );

}
