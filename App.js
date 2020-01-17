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
import Formulario from './componentes/formularioMasaCorporal';
import Manel from './componentes/Manel';


class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      mostrarSplash: true,
      //mostrarFormulario: true, 
    }
  }

  componentDidMount(){
    setTimeout(() => {
      this.setState({mostrarSplash: false})
    }, 3000);
  }

  /*componentDidUpdate(){
    setTimeout(() => {
      this.setState({mostrarFormulario: false})
    }, 3000);
  }*/

  render(){
    if(this.state.mostrarSplash === true){
      return(
        <View>
        <SplashScreen name='Cristina' surname='Gonzalez'/>
      </View>
      )
    } else {
      return (
        <View>
          <Formulario />
          <Manel />
        </View>
        
      )
    }

  }
};

export default App;
