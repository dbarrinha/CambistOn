import React from 'react';
import { createAppContainer } from 'react-navigation'
import createNativeStackNavigator from 'react-native-screens/createNativeStackNavigator';
import AsyncStorage from '@react-native-community/async-storage';
import {
  View,
  ActivityIndicator,
  StatusBar
} from 'react-native';
import createAnimatedSwitchNavigator from 'react-navigation-animated-switch';
import { Transition } from 'react-native-reanimated';

import Home from 'screens/Home'
import Login from 'screens/Login'
import { useScreens } from 'react-native-screens';
useScreens();


class AuthLoadingScreen extends React.Component {
  constructor(props) {
    super(props);
    this._bootstrapAsync();
  }

  _bootstrapAsync = async () => {
    const user = await AsyncStorage.getItem('user:Camb')
    if (user === null) {
      this.props.navigation.navigate('AuthStack')
    }else{
      console.log("teste")
    }
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <ActivityIndicator />
      </View>
    );
  }
}

const HomeStack = createNativeStackNavigator({
  Home: Home
});

const AuthStack = createNativeStackNavigator({
  Login: Login
});

const MySwitch = createAnimatedSwitchNavigator(
  {
    AuthLoading: AuthLoadingScreen,
    AuthStack: AuthStack,
    HomeStack: HomeStack,
  },
  {
    initialRouteName: 'AuthLoading',
    transition: (
      <Transition.Together>
        <Transition.Out
          type="slide-left"
          durationMs={500}
          interpolation="easeIn"
        />
        <Transition.In type="slide-right" durationMs={500} />
      </Transition.Together>
    ),
  }
);

const AppNavigation = createAppContainer(MySwitch);


export default AppNavigation;
