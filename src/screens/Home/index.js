import React, { useContext } from 'react';
import { View, StatusBar } from 'react-native';
import { NavigationContext } from 'react-navigation';
import {
  Thumb,
  Card,
  CardInfo,
  Title,
  Description,
  TextFooter,
  Separator
} from './styles'
import Sugestoes from './Sugestoes'
import { colors } from 'config/colors'
import { FlatList } from 'react-native-gesture-handler';


export default Home = () => {
  let produtos = [
    { nome: "Notebook intel i5", descricao: "produto novo" },
    { nome: "Moto g5plus", descricao: "na caixa" },
    { nome: "Iphone 8 plus", descricao: "Acompanha carregador" },
  ]

  const renderCard = (item) => {

    return (
      <Card>
        <Thumb
          src={{ uri: 'https://placeimg.com/140/140/any' }}
        />
        <CardInfo>
          <Title>{item.item.nome}</Title>
          <Description>
            {item.item.descricao}
          </Description>
          <Title>R$ 500</Title>
          <TextFooter>
            30 setembro 13:10, Centro
          </TextFooter>
        </CardInfo>
      </Card>
    )
  }

  return (
    <View style={{ flex: 1, backgroundColor: colors.colorBackground, paddingVertical: 5 }}>
      <StatusBar backgroundColor={colors.colorBackground} barStyle="dark-content" />
      <Sugestoes  />
      <View style={{ margin: 5 }}>
        <Title>Mais produtos</Title>
      </View>
      <FlatList
        data={produtos}
        extraData={produtos}
        renderItem={(item) => renderCard(item)}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );

}
