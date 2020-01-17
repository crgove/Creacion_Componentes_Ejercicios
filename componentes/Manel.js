import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  ImageBackground
} from 'react-native';
import ConvertidorEuros from './ConvertidorEuros';

export default class Manel extends Component {
    render(){
        return(
            <View>
                <ConvertidorEuros />
            </View>
        )
    }
}