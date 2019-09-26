import React, { Component } from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Animated from 'react-native-reanimated';
import { TapGestureHandler, State } from 'react-native-gesture-handler'
const { height, width } = Dimensions.get("window");
const { Value, event, block, cond, eq, set } = Animated

console.disableYellowBox = true;
export default class Login extends Component {
  static navigationOptions = {
    header: null,
  };
  constructor(props) {
    super(props);
    this.state = {
      isReady: false
    }

    this.buttonOpacity = new Value(1)
    this.onStateChange = event([
      {
        nativeEvent: ({ state }) => block([
          cond(eq(state, State.END), set(this.buttonOpacity, 0))
        ])
      },
    ]);

  }

  render() {

    return (
      <View style={{ flex: 1, backgroundColor: 'white', justifyContent: 'flex-end' }}>
        <View style={{ ...StyleSheet.absoluteFill }}>
          <LinearGradient
            colors={['#e78', '#3c1053']}
            style={styles.linearGradient} />
        </View>
        <View style={{ height: height / 3, justifyContent: 'center' }}>
          <TapGestureHandler onHandlerStateChange={this.onStateChange}>
            <Animated.View style={[styles.button, { opacity: this.buttonOpacity }]}>
              <Text style={{ fontSize: 20, fontWeight: 'bold' }}>
                SIGN IN
              </Text>
            </Animated.View>
          </TapGestureHandler>
          <View style={{ ...styles.button, backgroundColor: '#2e71dc', marginTop: 10 }}>
            <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'white' }}>
              SIGN IN WITH FACEBOOK
              </Text>
          </View>
        </View>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    width: null,
    height: null,
    paddingLeft: 15,
    paddingRight: 15,

  },
  buttonText: {
    fontSize: 18,
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
    backgroundColor: 'transparent',
  },
  button: {
    backgroundColor: 'white',
    height: 70,
    marginHorizontal: 20,
    borderRadius: 35,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
