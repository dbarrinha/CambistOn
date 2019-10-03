import React, { useEffect } from 'react';
import { View, StatusBar, TouchableOpacity, Dimensions } from 'react-native';
import {
  Thumb,
  Card,
  CardInfo,
  Title,
  Description,
  TextFooter
} from './styles'
import Sugestoes from './Sugestoes'
import Filtros from './Filtros'
import { colors } from 'config/colors'
import { FlatList } from 'react-native-gesture-handler';
import { useNavigation } from 'react-navigation-hooks'
import Animated from 'react-native-reanimated';
import { CardHomeSK } from 'components/skeleton'
import { runTiming } from 'utils/animated'
const {
  Value,
  cond,
  eq, set,
  useCode,
  Clock,
  interpolate,
  Extrapolate,
  concat
} = Animated

export default Home = () => {
  let animationState = new Value(0)

  const { navigate } = useNavigation();
  let produtos = [
    { nome: "Notebook intel i5", descricao: "produto novo" },
    { nome: "Moto g5plus", descricao: "na caixa" },
    { nome: "Iphone 8 plus", descricao: "Acompanha carregador" },
  ]

  const renderCard = (item) => {
    console.log(item.index)
    return (
      <Card >
        <Thumb
          source={require('assets/imgs/iphone.jpg')}
        />
        <TouchableOpacity onPress={() => { navigate("Details") }}>
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
      <Filtros />
      <Sugestoes />
      <View style={{ margin: 5 }}>
        <Title>Mais produtos</Title>
      </View>
      <Animated.View >
        <FlatList
          data={produtos}
          keyExtractor={item => item.nome + ""}
          extraData={produtos}
          renderItem={(item) => renderCard(item)}
          showsHorizontalScrollIndicator={false}
        />
      </Animated.View>
      <CardHomeSK />
    </View>
  );

}
