import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  ImageBackground,
  TextInput,
  Button
} from 'react-native';

export default class ConvertidorEuros extends Component {
    constructor(props){
        super(props)

        this.state={
            eurosF: undefined, 
            mensajeConversion: undefined
        }
    }

    guardarEuros=(euros)=>{
        this.setState({eurosF: euros});
    }

    convertirEuros=()=> {
        let euros = this.state.eurosF*1.66;
        this.setState({mensajeConversion: euros});
    }

    render(){
        return(
            <View>
                <Text>CONVIERTE TUS EUROS A PESETAS</Text>
                <TextInput placeholder="EUROS" onChangeText={this.guardarEuros}/>
                <TextInput placeholder="RESULTADO" editable={false} value={"PESETAS: " + this.state.mensajeConversion}/>
                <Button title="DALE!!!" onPress={this.convertirEuros} />
            </View>
        )
    }
}