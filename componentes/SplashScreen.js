import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  ImageBackground
} from 'react-native';

class SplashScreen extends Component {
    constructor(props){
        super(props)
    }
    render(){
        return(
            <View>
                <Image source={require(this.props.source)}/>
            </View>
        )
    }
}

export default SplashScreen;