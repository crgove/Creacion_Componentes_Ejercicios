import React, {Component} from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  Alert
} from 'react-native';

export default class Formulario extends Component {
    constructor(props){
        super(props);
        this.state = {
            pesoIntroducido: undefined,
            alturaIntroducida: undefined,
            masaCorporal: undefined,
            imc: '',
            mensaje: undefined
        }
    }

    calcularMasa = () => {
      let calculo = this.state.pesoIntroducido/Math.pow(this.state.alturaIntroducida, 2);
      console.log("imc:"+calculo);
      this.setState({imc: calculo});
      this.mostrarMensaje();
    }

    mostrarMensaje(){
      let resultado = ""
      let calculo=this.state.imc;

      if(calculo < 18.5) {
          resultado = "Peso insuficiente";
      } else if(calculo >= 18.5 && calculo < 24.9){
          resultado = "Peso normal"
      } else if(calculo >= 25 && calculo <= 26.9){
          resultado = "Sobrepeso grado I"
      } else if(calculo >= 27 && calculo <= 29.9){
          resultado ="Sobrepeso grado II"
      } else if(calculo >= 30 && calculo <= 34.9){
          resultado = "Obesidad tipo I"
      } else if(calculo >= 35 && calculo <= 39.9){
          resultado = "Obesidad tipo II"
      } else if(calculo >= 40 && calculo <= 49.9){
          resultado = "Obesidad mórbida"
      } else if(calculo >= 50){
          resultado = "Obesidad extrema"
      }
      console.log("missatge:"+resultado); //Mensaje introducido solo para que aparezca por consola y ver si funciona 
      this.setState({mensaje: resultado})
    }

    guardaPeso=(peso)=>{
      
      this.setState({pesoIntroducido: peso})
      console.log("Modifique pes "+peso);
    }

    guardaAltura=(altura)=>{
      
      this.setState({alturaIntroducida: altura})
      console.log("Modifique altura "+altura);
    }

    render(){
        return(
          <View>
              <View>
                <Text>INTRODUCE TU PESO Y ALTURA</Text>
                <TextInput placeholder="Peso" maxLength={8} keyboardType={"number-pad"}
                onChangeText={this.guardaPeso} />
                <TextInput placeholder="Altura" maxLength={8} keyboardType={"number-pad"} 
                onChangeText={this.guardaAltura}/>
              </View>
              <View>
                {
                  this.state.imc < 27
                  ?
                  <Text style={{color: 'red'}}>{this.state.mensaje}{this.state.imc}</Text>
                  :
                  this.state.imc >= 27 && this.state.imc <= 39
                  ?
                  <Text style={{color: 'green'}}>{this.state.mensaje}</Text>
                  :
                  this.state.imc > 40 
                  ?
                  <Text style={{color: 'orange'}}>{this.state.mensaje}</Text>
                  :
                <Text>{this.state.mensaje}</Text>
                }
              </View>
              <View>
                  <Button title="CALCULAR"
                  onPress={this.calcularMasa}/>  
              </View>
          </View>
        )
    }
} 

