import React, {Component} from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  Alert
} from 'react-native';
import calcularMasa from './funcionCalcularMasa';

export default class Formulario extends Component {
    constructor(props){
        super(props);


        this.state = {
            pesoIntroducido: undefined,
            alturaIntroducida: undefined,
            masaCorporal: undefined
        }
    }

    guardaPesoAltura(peso, altura){
        this.setState({pesoIntroducido: peso});
        this.setState({alturaIntroducida: altura});
    }

    /*guardarPeso = (peso) => {this.setState({pesoIntroducido: peso})};
    recibeStreet = (value) => {this.setState({street: value})};*/

    calcularMasa(){
        let resultadoMasa = calcularMasa(peso,);
        this.setState({masaCorporal: resultadoMasa}); 

        Alert.altert('Masa corporal: ' + this.state.masaCorporal);
    }

    render(){
        return(
          <View>
              <View>
                <Text>INTRODUCE TU PESO Y ALTURA</Text>
                <TextInput placeholder="Peso" maxLength={8} keyboardType={"number-pad"}
                onChangeText={(pesoIntroducido)=> this.guardaPesoAltura(pesoIntroducido)} />
                <TextInput placeholder="Altura" maxLength={8} keyboardType={"number-pad"} 
                onChangeText={(alturaIntroducida)=> this.guardaPesoAltura(alturaIntroducida)}/>
              </View>
              <View>
                <TextInput placeholder="MASA CORPORAL" editable={false} style={{color: 'blue'}}
                  placeholderTextColor='#FF0000'
                  //propiedad de textinput que permite mostrar un valor
                />
              </View>
              <View>
                  <Button title="CALCULAR"
                  onPress={this.calcularMasa}/>
              </View>
          </View>
        )
    }
} 

