import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  ImageBackground
} from 'react-native';

class SplashScreen extends Component {
    render(){
        //<Image source={{uri: 'https://facebook.github.io/react/logo-og.png'}}
        //style={{width: 400, height: 400}} />
        return(
            <View>
                <Image source={require('../images/57857_foto.jpg')}/>
                <Text>{this.props.name}</Text>
                <Text style={{fontWeight: 'bold'}}>{this.props.surname}</Text>
            </View>
        )
    }
}

export default SplashScreen;