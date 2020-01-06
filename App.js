/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
  View,
  Text,
  Alert,
} from 'react-native';
import SplashScreen from './componentes/SplashScreen';
import Formulario from './formularioMasaCorporal';
import calcularMasa from './funcionCalcularMasa';


class App extends Component {


  /*componentDidMount(){
    setTimeout(() => {
      Alert.alert(SplashScreen)
    }, 3000);
  }*/

  render(){
    return(
      <View>
        <SplashScreen source='./images/57857_foto.jpg'/>
        <Text>APP PRINCIPAL</Text>
      </View>
    )
  }
};

export default App;
