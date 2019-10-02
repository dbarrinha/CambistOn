import React from 'react';
import { View, StatusBar ,TouchableOpacity} from 'react-native';
import {
  Thumb,
  Card,
  CardInfo,
  Title,
  Description,
  TextFooter
} from './styles'
import Sugestoes from './Sugestoes'
import { colors } from 'config/colors'
import { FlatList, TouchableHighlight } from 'react-native-gesture-handler';


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
          source={require('assets/imgs/iphone.jpg')}
        />
        <TouchableOpacity onPress={()=> { console.log("teste") }}>
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
        </TouchableOpacity>
      </Card>
    )
  }

  return (
    <View style={{ flex: 1, backgroundColor: colors.colorBackground, paddingVertical: 5 }}>
      <StatusBar backgroundColor={colors.colorBackground} barStyle="dark-content" />
      <Sugestoes />
      <View style={{ margin: 5 }}>
        <Title>Mais produtos</Title>
      </View>
      <FlatList
        data={produtos}
        keyExtractor={item => item.nome + ""}
        extraData={produtos}
        renderItem={(item) => renderCard(item)}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );

}
